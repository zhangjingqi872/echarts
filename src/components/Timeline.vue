<template>
  <div class="history">
    <section class="timeline">
      <article class="NoFlap">发展历史</article>
      <article class="FlapRight">
        <h3>秦汉时期</h3>
        <p>导引术在秦汉时期已有明确记载...</p>
      </article>
      <article class="FlapLeft">
        <h3>隋唐时期</h3>
        <p>导引术在隋唐时期得到进一步发展...</p>
      </article>
      <article class="FlapRight">
        <h3>宋元时期</h3>
        <p>宋元时期导引术与医学结合更加紧密...</p>
      </article>
      <article class="FlapLeft">
        <h3>明清时期</h3>
        <p>明清时期导引术形成了完整体系...</p>
      </article>
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'Timeline',
  setup() {
    onMounted(() => {
      // 初始化时间线动画
      if (typeof window.initTimeline === 'function') {
        window.initTimeline()
      }
    })
  }
}
</script>

<style scoped>
/* 样式已通过全局CSS导入 */
</style>
