from PIL import Image
import requests
import streamlit as st
import base64
import streamlit.components.v1 as components

# 设置页面配置
st.set_page_config(page_title="国足进球时间统计",page_icon="⚽", layout="wide")

st.subheader("交作业时刻：")
st.divider()
with open("html/goalminutes.html", "r",encoding = 'utf-8') as f:
    html = f.read()
with open("html/hellosvg.html", "r",encoding = 'utf-8') as f:
    html1 = f.read()

left_column,right_column = st.columns((2,1))

with left_column:
    # 使用st.components.v1.html函数将HTML文件嵌入到Streamlit中
    st.components.v1.html(html, width=1300, height=800)

with right_column:
    # 使用st.components.v1.html函数将HTML文件嵌入到Streamlit中
    st.components.v1.html(html1, height=900)
