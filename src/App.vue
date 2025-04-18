<template>
  <div id="app">
    <nav class="nav-menu">
      <router-link to="/">首页</router-link>
      <router-link to="/change">数据可视化</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
  }

</script>

<style>
/* 导入现有CSS文件 */
@import '../css/all.css';
@import '../css/home.css';
@import '../css/timeline.css';
@import '../css/showbox.css';
</style>
