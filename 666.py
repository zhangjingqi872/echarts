import os
import json
import time
import traceback  # 添加这一行
from typing import List, Dict
from openai import OpenAI
from dotenv import load_dotenv
from concurrent.futures import ThreadPoolExecutor, as_completed
from tqdm import tqdm
import pandas as pd

# 强制加载.env文件
load_dotenv(override=True)

# 在文件顶部添加新的导入
import re

class DeepSeekSentimentAnalyzer:

    def __init__(self):
        self.api_key = os.getenv("DEEPSEEK_API_KEY")
        if not self.api_key or not self.api_key.startswith("sk-"):
            raise ValueError("无效的API密钥格式，必须以sk-开头")

        self.client = OpenAI(
            api_key=self.api_key,
            base_url="https://api.deepseek.com/v1",
            timeout=300
        )
        print(f"[Debug] API密钥校验通过（前三位：{self.api_key[:3]}...）")

        
        self.system_prompt = """你是一个专业的多语言Youtube评论文本分词系统，擅长对各国养生的话题和评论进行分词处理，熟悉如黄帝内经、易筋经、八段锦、五禽戏、马王堆导引术、洗髓经这些养生气功，对于Youtube等各国网络热词极为熟悉，可以精准捕捉到不同语言的词语内涵。请严格按以下规则分析输出文本：
            1. 将文本分词，词与词之间用单个空格分隔，分词使用json格式：
                {
                    "text": "原文",
                    "segmented_text": "分词文本（空格分隔）",
                    "语言类别": {
                        "自动识别语言1": true,
                        "自动识别语言2": true,
                        ...
                    }
                }
            2. 语言识别要求：
               - 自动检测文本中所有出现的语言类型
               - 包括但不限于中文、英文、日文、韩文、西班牙文、法文、德文、俄文等
               - 识别混合语言现象（如中英混杂）
               - 方言视为独立语言类型（如粤语、闽南语）
            3. 无需翻译！
            4. 去除标点符号、表情符号和特殊字符
            5. 去除停用词（世界各国语言的停用词），保留有意义的词语
            6. 保留有意义的数字
            7. 保留与TCM或者气功养生导引术相关的词语或者网络用语
            8. 不要添加任何解释或额外内容"""
        

    def data_divided(self, text: str, max_retries: int = 3) -> Dict:
        # 检查文本长度，如果过长则分段处理
        if len(text) > 1000:  # 设置一个合理的长度限制
            print(f"文本过长（{len(text)}字符），将进行分段处理")
            return self._process_long_text(text, max_retries)
            
        messages = [
            {"role": "system", "content": self.system_prompt},
            {"role": "user", "content": f"请对以下关于黄帝内经、易筋经、八段锦、五禽戏、马王堆导引术、洗髓经这些养生气功的Youtube评论文本进行分词并统计词频（需自动识别文本中所有语言类型，保留原始文字形式，无需转换繁简体）：\n{text}"}
        ]
        
        for attempt in range(max_retries):
            try:
                response = self.client.chat.completions.create(
                    model='deepseek-chat',
                    messages=messages,
                    temperature=0.1,
                    max_tokens=1024,
                    response_format={"type": "json_object"}
                )
                
                # 获取原始响应
                raw_response = response.choices[0].message.content
                
                try:
                    # 首先尝试直接解析
                    response_json = json.loads(raw_response)
                except json.JSONDecodeError:
                    # 如果直接解析失败，进行更强大的清洗
                    # 1. 处理引号问题
                    cleaned_response = raw_response \
                        .replace("'", "\"") \
                        .replace("，", ",") \
                        .replace("：", ":") \
                        .replace(""", "\"").replace(""", "\"") \
                        .replace("'", "\"").replace("'", "\"") \
                        .replace("```json", "").replace("```", "")
                    
                    # 2. 预处理text字段内容，转义所有可能导致JSON解析错误的字符
                    text_pattern = r'"text"\s*:\s*"([^"]*)"'
                    text_match = re.search(text_pattern, cleaned_response)
                    if text_match:
                        original_text = text_match.group(1)
                        # 转义文本中的特殊字符
                        escaped_text = original_text.replace('"', '\\"').replace('\\', '\\\\')
                        # 替换回原响应
                        cleaned_response = cleaned_response.replace(f'"text": "{original_text}"', f'"text": "{escaped_text}"')
                    
                    # 3. 处理URL和特殊字符
                    # 先提取所有URL并替换为占位符
                    url_pattern = r'https?://[^\s,"}]+'
                    urls = re.findall(url_pattern, cleaned_response)
                    for i, url in enumerate(urls):
                        placeholder = f"__URL_PLACEHOLDER_{i}__"
                        cleaned_response = cleaned_response.replace(url, placeholder)
                    
                    # 4. 处理未加引号的key
                    cleaned_response = re.sub(r'([{,]\s*)(\w+)(\s*[:}])', r'\1"\2"\3', cleaned_response)
                    
                    # 5. 处理语言类别格式
                    cleaned_response = re.sub(r'"语言类别"\s*:\s*{([^}]+)}', 
                                            lambda m: self._fix_language_format(m.group(1)), 
                                            cleaned_response)
                    
                    # 6. 恢复URL占位符
                    for i, url in enumerate(urls):
                        placeholder = f"__URL_PLACEHOLDER_{i}__"
                        escaped_url = url.replace('"', '\\"')  # 转义URL中的引号
                        cleaned_response = cleaned_response.replace(placeholder, escaped_url)
                    
                    # 7. 确保外层有大括号
                    if not cleaned_response.strip().startswith("{"):
                        cleaned_response = "{" + cleaned_response + "}"
                    
                    # 8. 最后一道防线：尝试修复常见的JSON格式错误
                    cleaned_response = self._fix_common_json_errors(cleaned_response)
                    
                    # 尝试解析清洗后的JSON
                    try:
                        response_json = json.loads(cleaned_response)
                    except json.JSONDecodeError as e:
                        # 记录详细错误信息
                        error_msg = f"""
JSON解析失败！
原始响应: {raw_response}
清洗后响应: {cleaned_response}
错误详情：{str(e)}
"""
                        print(error_msg[:500] + "..." if len(error_msg) > 500 else error_msg)
                        with open('json_errors.log', 'a', encoding='utf-8') as f:
                            f.write(f"{'-'*50}\n{error_msg}\n")
                        
                        # 使用备用方案：构造一个基本的响应
                        response_json = {
                            "text": text,
                            "segmented_text": text,  # 使用原文作为分词结果
                            "语言类别": {"未知语言": True}
                        }
                
                # 返回处理后的结果
                return {
                    "text": text,
                    "segmented": response_json.get('segmented_text', '').strip(),
                    "languages": list(response_json.get('语言类别', {}).keys())
                }
                
            except Exception as e:
                if attempt == max_retries - 1:
                    # 最后一次尝试失败，返回基本结果
                    return {
                        "text": text,
                        "segmented": text,
                        "languages": ["处理失败"]
                    }
                time.sleep(2 ** attempt)
    
    def _fix_common_json_errors(self, json_str):
        """修复常见的JSON格式错误"""
        # 1. 修复text字段中的引号和冒号问题
        text_pattern = r'"text"\s*:\s*"([^"]*)"'
        match = re.search(text_pattern, json_str)
        if match:
            text_content = match.group(1)
            # 检测并修复text内容中可能导致JSON解析错误的模式
            if '"' in text_content or ':' in text_content:
                # 完全转义text内容
                escaped_text = text_content.replace('"', '\\"').replace(':', '\\:')
                json_str = json_str.replace(f'"text": "{text_content}"', f'"text": "{escaped_text}"')
        
        # 2. 修复缺少逗号的问题
        json_str = re.sub(r'("[^"]+"\s*:\s*"[^"]+")(\s*")', r'\1,\2', json_str)
        
        # 3. 修复多余逗号的问题
        json_str = re.sub(r',\s*}', '}', json_str)
        
        # 4. 修复segmented_text字段中的特殊字符
        segmented_pattern = r'"segmented_text"\s*:\s*"([^"]*)"'
        match = re.search(segmented_pattern, json_str)
        if match:
            segmented_content = match.group(1)
            escaped_segmented = segmented_content.replace('"', '\\"')
            json_str = json_str.replace(f'"segmented_text": "{segmented_content}"', 
                                      f'"segmented_text": "{escaped_segmented}"')
        
        return json_str
    
    def _fix_language_format(self, language_text):
        """修复语言类别格式"""
        result = '"语言类别": {'
        languages = re.findall(r'"([^"]+)"', language_text)
        if not languages:
            languages = re.findall(r'([^,:\s]+)', language_text)
        
        for i, lang in enumerate(languages):
            if i > 0:
                result += ", "
            result += f'"{lang}": true'
        
        result += "}"
        return result

    def batch_divided(self, texts: List[str], max_workers: int = 10) -> List[Dict]:
        """
        使用多线程的批量分析方法
        """
        results = []
        
        # 使用线程池处理文本
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            # 创建任务列表并执行，使用tqdm显示进度
            futures = list(tqdm(
                executor.map(self.data_divided, texts),
                total=len(texts),
                desc="文本分词进度"
            ))
            
            # 收集结果
            for result in futures:
                if result:
                    results.append(result)
        
        return results

    def _process_long_text(self, text: str, max_retries: int) -> Dict:
        """分段处理长文本并合并结果"""
        # 将文本分成多个段落，每段不超过800字符
        segment_size = 800
        segments = []
        for i in range(0, len(text), segment_size):
            segments.append(text[i:i+segment_size])
        
        print(f"文本已分为 {len(segments)} 个段落进行处理")
        
        # 处理每个段落
        all_segmented = []
        all_languages = set()
        
        for i, segment in enumerate(segments):
            try:
                print(f"处理段落 {i+1}/{len(segments)}...")
                # 使用普通方法处理每个段落
                messages = [
                    {"role": "system", "content": self.system_prompt},
                    {"role": "user", "content": f"请对以下文本片段进行分词（这是一段长文本的第{i+1}部分，共{len(segments)}部分）：\n{segment}"}
                ]
                
                for attempt in range(max_retries):
                    try:
                        response = self.client.chat.completions.create(
                            model='deepseek-chat',
                            messages=messages,
                            temperature=0.1,
                            max_tokens=1024,
                            response_format={"type": "json_object"}
                        )
                        
                        # 获取原始响应
                        raw_response = response.choices[0].message.content
                        
                        try:
                            # 尝试解析JSON
                            response_json = json.loads(raw_response)
                        except json.JSONDecodeError:
                            # 清洗响应
                            cleaned_response = self._clean_response(raw_response)
                            try:
                                response_json = json.loads(cleaned_response)
                            except json.JSONDecodeError:
                                if attempt == max_retries - 1:
                                    print(f"段落 {i+1} 处理失败，跳过")
                                    response_json = {
                                        "segmented_text": segment,
                                        "语言类别": {"未知语言": True}
                                    }
                                else:
                                    time.sleep(2 ** attempt)
                                    continue
                        
                        # 收集分词结果和语言
                        segmented = response_json.get('segmented_text', '').strip()
                        languages = list(response_json.get('语言类别', {}).keys())
                        
                        all_segmented.append(segmented)
                        all_languages.update(languages)
                        
                        break  # 成功处理，跳出重试循环
                    except Exception as e:
                        if attempt == max_retries - 1:
                            print(f"段落 {i+1} 处理出错: {str(e)}")
                            all_segmented.append(segment)
                            all_languages.add("处理失败")
                        else:
                            time.sleep(2 ** attempt)
            except Exception as e:
                print(f"段落 {i+1} 处理异常: {str(e)}")
                all_segmented.append(segment)
                all_languages.add("处理失败")
        
        # 合并所有段落的分词结果
        combined_segmented = " ".join(all_segmented)
        
        return {
            "text": text,
            "segmented": combined_segmented,
            "languages": list(all_languages)
        }
    
    def _clean_response(self, raw_response):
        """清洗API响应"""
        # 处理引号问题
        cleaned_response = raw_response \
            .replace("'", "\"") \
            .replace("，", ",") \
            .replace("：", ":") \
            .replace(""", "\"").replace(""", "\"") \
            .replace("'", "\"").replace("'", "\"") \
            .replace("```json", "").replace("```", "")
        
        # 预处理text字段内容
        text_pattern = r'"text"\s*:\s*"([^"]*)"'
        text_match = re.search(text_pattern, cleaned_response)
        if text_match:
            original_text = text_match.group(1)
            escaped_text = original_text.replace('"', '\\"').replace('\\', '\\\\')
            cleaned_response = cleaned_response.replace(f'"text": "{original_text}"', f'"text": "{escaped_text}"')
        
        # 处理URL和特殊字符
        url_pattern = r'https?://[^\s,"}]+'
        urls = re.findall(url_pattern, cleaned_response)
        for i, url in enumerate(urls):
            placeholder = f"__URL_PLACEHOLDER_{i}__"
            cleaned_response = cleaned_response.replace(url, placeholder)
        
        # 处理未加引号的key
        cleaned_response = re.sub(r'([{,]\s*)(\w+)(\s*[:}])', r'\1"\2"\3', cleaned_response)
        
        # 处理语言类别格式
        cleaned_response = re.sub(r'"语言类别"\s*:\s*{([^}]+)}', 
                                lambda m: self._fix_language_format(m.group(1)), 
                                cleaned_response)
        
        # 恢复URL占位符
        for i, url in enumerate(urls):
            placeholder = f"__URL_PLACEHOLDER_{i}__"
            escaped_url = url.replace('"', '\\"')
            cleaned_response = cleaned_response.replace(placeholder, escaped_url)
        
        # 确保外层有大括号
        if not cleaned_response.strip().startswith("{"):
            cleaned_response = "{" + cleaned_response + "}"
        
        # 修复常见的JSON格式错误
        cleaned_response = self._fix_common_json_errors(cleaned_response)
        
        return cleaned_response

if __name__ == "__main__":
    start_time = time.time()
    try:
        # 新增分析器实例化
        analyzer = DeepSeekSentimentAnalyzer()
        
        # 创建结果目录
        data_folder = r'C:\Users\JqZhang\Desktop\youtube-comments\divided+couny\data'
        output_folder = r'C:\Users\JqZhang\Desktop\youtube-comments\divided+couny\output'
        os.makedirs(output_folder, exist_ok=True)

        # 创建截断文本记录文件夹
        truncated_folder = os.path.join(output_folder, "truncated_texts")
        os.makedirs(truncated_folder, exist_ok=True)

        print("正在读取数据...")
        # 遍历data文件夹中的所有JSON文件
        for file_name in os.listdir(data_folder):
            if file_name.endswith('.json'):
                file_path = os.path.join(data_folder, file_name)
                # 读取json文件
                print(f"\n正在处理文件: {file_name}")
                with open(file_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)

                # 提取text字段并检查长度
                texts = []
                long_texts_info = []
                
                for i, item in enumerate(data):
                    text = str(item.get('text', ''))
                    if len(text) > 1000:  # 记录长文本信息，但不截断
                        long_texts_info.append({
                            'original_index': i,
                            'text': text,
                            'length': len(text),
                            'id': item.get('id', f'unknown_{i}')
                        })
                    texts.append(text)  # 保存完整文本

                # 如果有长文本，保存信息
                if long_texts_info:
                    long_texts_path = os.path.join(truncated_folder, f"long_texts_{os.path.splitext(file_name)[0]}.json")
                    with open(long_texts_path, 'w', encoding='utf-8') as f:
                        json.dump(long_texts_info, f, ensure_ascii=False, indent=2)
                    print(f"发现 {len(long_texts_info)} 条长文本，详情已保存至: {long_texts_path}")

                total_texts = len(texts)
                print(f"开始处理 {total_texts} 条数据...")

                # 批量处理所有文本
                try:
                    results = analyzer.batch_divided(texts)
                    
                    # 创建结果列表和失败列表
                    processed_data = []
                    failed_data = []
                    
                    for i, result in enumerate(results):
                        if i < len(data):  # 确保索引有效
                            # 保留原始数据
                            item = data[i].copy()
                            # 添加分词结果
                            item['segmented_text'] = result.get('segmented', '')
                            item['languages'] = result.get('languages', [])
                            processed_data.append(item)
                            
                            # 检查是否处理失败
                            if "处理失败" in result.get('languages', []):
                                failed_item = {
                                    'original_index': i,
                                    'text': item.get('text', ''),
                                    'id': item.get('id', f'unknown_{i}')
                                }
                                failed_data.append(failed_item)
                    
                    # 保存处理结果
                    output_path = os.path.join(output_folder, f"processed_{file_name}")
                    with open(output_path, 'w', encoding='utf-8') as f:
                        json.dump(processed_data, f, ensure_ascii=False, indent=2)
                    print(f"处理结果已保存至: {output_path}")
                    
                    # 保存失败的文本
                    if failed_data:
                        failed_path = os.path.join(output_folder, f"failed_{os.path.splitext(file_name)[0]}.json")
                        with open(failed_path, 'w', encoding='utf-8') as f:
                            json.dump(failed_data, f, ensure_ascii=False, indent=2)
                        print(f"解析失败的 {len(failed_data)} 条数据已保存至: {failed_path}")
                    
                    # 创建CSV格式的结果
                    df = pd.DataFrame(processed_data)
                    csv_path = os.path.join(output_folder, f"processed_{os.path.splitext(file_name)[0]}.csv")
                    df.to_csv(csv_path, index=False, encoding='utf-8-sig')
                    print(f"CSV结果已保存至: {csv_path}")

                except Exception as e:
                    print(f"\n处理数据时出错: {str(e)}")
                    traceback_info = traceback.format_exc()
                    print(f"详细错误信息: {traceback_info}")
        
    except Exception as e:
        print(f"运行失败：{str(e)}")
        print("终极检查清单：")
        print("1. .env文件内容是否为 DEEPSEEK_API_KEY=sk-xxx (无引号)")
        print("2. 文件结构应为：")
        print("   your_project/")
        print("   ├── .env")
        print("   └── divided.py")
        print("3. 在控制台执行 echo %DEEPSEEK_API_KEY% (Win) 或 echo $DEEPSEEK_API_KEY (Mac/Linux) 查看环境变量")
    
    end_time = time.time()
    print(f"总耗时 {end_time - start_time:.2f} 秒")