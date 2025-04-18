<template>
  <section class="acupoints" id="TCM">
    <dl class="list nigiri">
      <dt>常用穴位与肌肉</dt>
      <dd><a href="#TCM" data-acupoint="shousanli-left shousanli-right">手三里穴</a></dd>
      <dd><a href="#TCM" data-acupoint="guanyuan">关元穴</a></dd>
      <dd><a href="#TCM" data-acupoint="zusanli-left zusanli-right">足三里穴</a></dd>
      <dd><a href="#TCM" data-acupoint="taichong-left taichong-right">太冲穴</a></dd>
      <dd><a href="#TCM" class="acupoint-link" data-acupoints="yongquan-left,yongquan-right">涌泉穴</a></dd>
      <dd><a href="#TCM" data-acupoint="dazhui">大椎穴</a></dd>
      <dd><a href="#TCM" data-acupoint="jianjing-left jianjing-right">肩井穴</a></dd>
      <dd><a href="#TCM" data-acupoint="mingmen">命门</a></dd>
      <dd><a href="#TCM" data-acupoint="shenshu-left shenshu-right">肾俞穴</a></dd>
      <dd><a href="#TCM" data-acupoint="feishu-left feishu-right">肺俞穴</a></dd>
      <dd><a href="#TCM" data-muscle="backmucle">腰背</a></dd>
      <dd><a href="#TCM" data-muscle="trapsmucle">肩颈</a></dd>
    </dl>

    <a href="#TCM" class="toggle">Toggle</a>
  </section>
</template>

<script>
export default {
  name: 'AcupointSelector',
  emits: ['acupoint-hover', 'acupoint-leave', 'muscle-hover', 'muscle-leave'],
  methods: {
    handleAcupointHover(event) {
      const acupointIds = event.target.dataset.acupoint?.split(' ') || 
                         event.target.dataset.acupoints?.split(',') || [];
      this.$emit('acupoint-hover', acupointIds);
    },
    handleAcupointLeave(event) {
      const acupointIds = event.target.dataset.acupoint?.split(' ') || 
                         event.target.dataset.acupoints?.split(',') || [];
      this.$emit('acupoint-leave', acupointIds);
    },
    handleMuscleHover(event) {
      this.$emit('muscle-hover', event.target.dataset.muscle);
    },
    handleMuscleLeave(event) {
      this.$emit('muscle-leave', event.target.dataset.muscle);
    }
  }
}
</script>

<style scoped>
/* 样式已通过全局CSS导入 */
</style>
