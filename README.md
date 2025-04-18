# 导引术数据可视化项目

## 项目介绍

本项目是一个基于Vue.js的导引术数据可视化网站，整合了静态页面home.html和change.html的内容，提供了导引术相关的信息展示、人体穴位交互、历史时间线以及数据可视化功能。

## 技术栈

- Vue 3
- Vue Router
- ECharts
- D3.js
- Jarallax (视差滚动效果)

## 项目结构

```
├── public/            # 静态资源
├── src/               # 源代码
│   ├── components/    # 组件
│   ├── router/        # 路由配置
│   ├── views/         # 视图
│   ├── App.vue        # 主组件
│   └── main.js        # 入口文件
├── css/               # 样式文件
├── js/                # JavaScript文件
├── images/            # 图片资源
└── json/              # JSON数据
```

## 功能特点

1. **首页**：展示导引术基本信息和人体穴位交互
2. **数据可视化**：展示导引术相关数据的可视化图表
3. **人体穴位交互**：可以点击和悬停查看不同穴位信息
4. **历史时间线**：展示导引术的历史发展
5. **视差滚动效果**：提供良好的视觉体验

## 安装和运行

```bash
# 安装依赖
npm install

# 开发模式运行
npm run serve

# 构建生产版本
npm run build
```

## 浏览器支持

- Chrome
- Firefox
- Safari
- Edge

## 注意事项

- 本项目使用了大量SVG和CSS动画，请确保浏览器支持这些特性
- 部分可视化效果需要较高的硬件性能支持