<template>
  <div class="change">
    <section>
      <div class="bbox">
        <h2 data-jarallax-element="0 -200">2020年疫情爆发...</h2>
        <div class="contentbox">
          <div class="imgBx jarallax">
            <!-- 替换图片为ECharts图表 -->
            <div id="firstchart" style="width: 100%; height: 400px;"></div>
          </div>
          <div class="content" data-jarallax-element="-200 0">
            <p>此图表展示了2020年至2024年间，各种导引术相关主题的评论数量变化趋势，包括易筋经、五禽戏、马王堆导引术、黄帝内经和导引术的综合数据。</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="bbox">
        <h2 data-jarallax-element="0 200">八段锦、五禽戏辅助治疗...</h2>
        <div class="contentbox">
          <div class="imgBx jarallax">
            <img class="jarallax-img" src="/images/qigong.jpg">
          </div>
          <div class="content" data-jarallax-element="-200 0">
            <p>"未病先防、既病防变，"疫情的两次爆发，也是八段锦和五禽戏两次被带进人们的视野，无论是对疫情的防控，还是病后的辅助治疗，通过舒缓而柔和的八段锦和五禽戏，在强身健体的同时，也起到了调节心理的作用，因此其在疫情之后也得到了极大的关注</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="bbox">
        <h2 data-jarallax-element="0 -200">...养生功导引术被更多人关注</h2>
        <div class="contentbox">
          <div class="imgBx jarallax">
            <img class="jarallax-img" src="/images/wqx+yjj.jpg" style="position: relative !important; width: 100%; height: 100%; object-fit: cover; object-position: center; transform: none !important;">
          </div>
          <div class="content" data-jarallax-element="-200 0">
            <p>随着健康意识的提升，传统养生功法如导引术、易筋经等被更多人关注和学习，成为现代人追求健康生活方式的重要选择。</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="bbox">
        <h2 data-jarallax-element="0 200">是传统文化的机遇，也是陷阱...</h2>
        <div class="contentbox">
          <div class="imgBx jarallax">
            <!-- 替换图片为3D知识图谱 -->
            <iframe src="/weibo_knowledge_graph_3d.html" style="width: 100%; height: 100%; border: none; position: relative !important; transform: none !important;"></iframe>
          </div>
          <div class="content" data-jarallax-element="-200 0">
            <p>传统文化的复兴既是机遇也是挑战，如何在现代语境下正确理解和传承导引术等传统健身方法，避免商业化过度开发和误读，是我们需要思考的问题。</p>
          </div>
        </div>
      </div>
    </section>

    <div class="qigong-section">
      <h2 class="qigong-title">导引术</h2>
      <div id="qigong-visualization">
        <!-- D3.js可视化将通过脚本动态加载 -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'Change',
  setup() {
    let echartInstance = null;
    
    const initEcharts = () => {
      // 确保DOM已加载
      if (!document.getElementById('firstchart')) return;
      
      // 初始化ECharts实例
      const dom = document.getElementById('firstchart');
      echartInstance = echarts.init(dom);
      
      // 数据源
      const sourceData = [
        ['时间', '马王堆导引术', '易筋经', '八段锦', '五禽戏', '黄帝内经', '导引术', '综合'],
        ['2020年1-3月', 45, 165804, 2079343, 850086, 226918, 21603, 3343799],
        ['2020年4-6月', 435, 81270, 2801139, 361873, 6052, 2910, 3253679],
        ['2020年7-9月', 81, 19410, 7049251, 154510, 21363, 2917, 7247532],
        ['2020年10-12月', 430, 128368, 422151, 238846, 2759, 3025, 795579],
        ['2021年1-3月', 23, 11852, 247682, 110975, 29359, 991, 400882],
        ['2021年4-6月', 20, 548528, 489531, 211307, 1478, 7295, 1258159],
        ['2021年7-9月', 2414, 173622, 979534, 517587, 258175, 5346, 1936678],
        ['2021年10-12月', 1, 66380, 1174463, 728047, 105153, 1323, 2075367],
        ['2022年1-3月', 2, 26686, 170852, 66628, 36887, 1727, 302782],
        ['2022年4-6月', 10283, 39444, 299325, 45625, 9530, 10833, 415040],
        ['2022年7-9月', 37, 23762, 448514, 0, 1920, 962, 475195],
        ['2022年10-12月', 78, 56702, 3291970, 256, 5638, 1087, 3355731],
        ['2023年1-3月', 1825, 52572, 30608, 152, 2968, 2709, 90834],
        ['2023年4-6月', 2651, 41472, 3273920, 0, 17054, 3816, 3338913],
        ['2023年7-9月', 17, 74450, 2936069, 1788, 1026610, 20871, 4059805],
        ['2023年10-12月', 30, 24708, 3171113, 7048, 113558, 12895, 3329352],
        ['2024年1-3月', 21, 13472, 3967673, 1847066, 975434, 8933, 6812599],
        ['2024年4-6月', 5607, 27486, 2161668, 1871897, 542862, 9594, 4619114],
        ['2024年7-9月', 1423, 30366, 1535226, 0, 731980, 3210, 2302205],
        ['2024年10-12月', 2694, 98534, 2800156, 0, 1492870, 7011, 4401265]
      ];
      
      // 配置项
      const option = {
        dataset: {
          source: sourceData
        },
        title: {
          text: ''
        },
        legend: {
          data: ['马王堆导引术', '易筋经', '八段锦', '五禽戏', '黄帝内经', '导引术', '综合'],
          textStyle: {
            color: 'black'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            return params.seriesName;
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {},
        series: [
          {
            name: '马王堆导引术',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: { width: 0 },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'RGB(239, 164, 132)'
              }, {
                offset: 1,
                color: 'RGB(182, 118, 108)'
              }]),
              emphasis: { opacity: 1 }
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'RGB(239, 164, 132)'
              }, {
                offset: 1,
                color: 'RGB(182, 118, 108)'
              }])
            },
            emphasis: { focus: 'series' },
            datasetIndex: 0,
            seriesLayoutBy: 'column'
          },
          {
            name: '易筋经',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: { width: 0 },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(235, 207, 158)'
              }, {
                offset: 1,
                color: 'rgb(239,164, 132)'
              }]),
              emphasis: { opacity: 1 }
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(235, 207, 158)'
              }, {
                offset: 1,
                color: 'rgb(239,164, 132)'
              }])
            },
            emphasis: { focus: 'series' },
            datasetIndex: 0,
            seriesLayoutBy: 'column'
          },
          {
            name: '八段锦',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: { width: 0 },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(197, 233, 227)'
              }, {
                offset: 1,
                color: 'rgb(255, 183, 195)'
              }]),
              emphasis: { opacity: 1 }
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(197, 233, 227)'
              }, {
                offset: 1,
                color: 'rgb(255, 183, 195)'
              }])
            },
            emphasis: { focus: 'series' },
            datasetIndex: 0,
            seriesLayoutBy: 'column'
          },
          {
            name: '五禽戏',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: { width: 0 },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(184, 168, 207)'
              }, {
                offset: 1,
                color: 'rgb(231, 188, 198)'
              }]),
              emphasis: { opacity: 1 }
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(184, 168, 207)'
              }, {
                offset: 1,
                color: 'rgb(231, 188, 198)'
              }])
            },
            emphasis: { focus: 'series' },
            datasetIndex: 0,
            seriesLayoutBy: 'column'
          },
          {
            name: '黄帝内经',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: { width: 0 },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(138, 140, 191)'
              }, {
                offset: 1,
                color: 'rgb(184, 168, 207)'
              }]),
              emphasis: { opacity: 1 }
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(138, 140, 191)'
              }, {
                offset: 1,
                color: 'rgb(184, 168, 207)'
              }])
            },
            emphasis: { focus: 'series' },
            datasetIndex: 0,
            seriesLayoutBy: 'column'
          },
          {
            name: '导引术',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: { width: 0 },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(182, 118, 108)'
              }, {
                offset: 1,
                color: 'rgb(182, 118, 108)'
              }]),
              emphasis: { opacity: 1 }
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(182, 118, 108)'
              }, {
                offset: 1,
                color: 'rgb(182, 118, 108)'
              }])
            },
            emphasis: { focus: 'series' },
            datasetIndex: 0,
            seriesLayoutBy: 'column'
          },
          {
            name: '综合',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: { width: 0 },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'RGB(078, 101, 155)'
              }, {
                offset: 1,
                color: 'RGB(138, 140, 191)'
              }]),
              emphasis: { opacity: 1 }
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'RGB(078, 101, 155)'
              }, {
                offset: 1,
                color: 'RGB(138, 140, 191)'
              }])
            },
            emphasis: { focus: 'series' },
            datasetIndex: 0,
            seriesLayoutBy: 'column'
          }
        ]
      };
      
      // 使用配置项设置图表
      echartInstance.setOption(option);
    };
    
    const initJarallax = () => {
      // 初始化Jarallax效果
      if (window.jarallax) {
        window.jarallax(document.querySelectorAll('.jarallax'), {
          speed: 0.6
        });
      }
    };
    
    const handleResize = () => {
      if (echartInstance) {
        echartInstance.resize();
      }
    };
    
    onMounted(() => {
      // 确保脚本加载完成
      const loadScripts = async () => {
        // 加载ECharts
        if (!window.echarts) {
          const echartsScript = document.createElement('script');
          echartsScript.src = 'https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.min.js';
          document.head.appendChild(echartsScript);
          await new Promise(resolve => echartsScript.onload = resolve);
        }
        
        // 加载Jarallax
        if (!window.jarallax) {
          const jarallaxScript = document.createElement('script');
          jarallaxScript.src = '/js/jarallax.js';
          document.head.appendChild(jarallaxScript);
          await new Promise(resolve => jarallaxScript.onload = resolve);
          
          const jarallaxElementScript = document.createElement('script');
          jarallaxElementScript.src = '/js/jarallax-element.js';
          document.head.appendChild(jarallaxElementScript);
          await new Promise(resolve => jarallaxElementScript.onload = resolve);
        }
        
        // 加载D3.js
        if (!window.d3) {
          const d3Script = document.createElement('script');
          d3Script.src = 'https://d3js.org/d3.v3.min.js';
          document.head.appendChild(d3Script);
          await new Promise(resolve => d3Script.onload = resolve);
          
          const linkScript = document.createElement('script');
          linkScript.src = '/js/链接.js';
          document.head.appendChild(linkScript);
        }
        
        // 初始化组件
        initEcharts();
        initJarallax();
      };
      
      loadScripts();
      
      // 添加窗口大小变化监听
      window.addEventListener('resize', handleResize);
    });
    
    onUnmounted(() => {
      // 清理资源
      if (echartInstance) {
        echartInstance.dispose();
      }
      window.removeEventListener('resize', handleResize);
    });
    
    return {};
  }
};
</script>

<style scoped>
/* 样式通过全局CSS导入 */
.qigong-section {
  margin: 0;
  padding: 20px;
  font-family: 'Noto Sans SC', 'Open Sans', sans-serif;
}

.qigong-title {
  text-align: center;
  margin-bottom: 30px;
}

#qigong-visualization {
  zoom: 0.5;
  width: 100%;
  height: 80vh; /* 调整为视口高度的80% */
}
</style>