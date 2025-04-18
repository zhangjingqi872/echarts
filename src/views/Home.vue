<template>
  <div>
    <!-- 首页封面部分已经在Header组件中实现 -->
    <Header />
    
    <!-- 分页 医道 -->
    <div class="shell-page">
      <header class="header">
        <hgroup>
          <h1>醫道</h1>
          <h2>導引術與古代醫學</h2>
        </hgroup>
      </header>

      <!-- 穴位选择器组件 -->
      <AcupointSelector 
        @acupoint-hover="handleAcupointHover"
        @acupoint-leave="handleAcupointLeave"
        @muscle-hover="handleMuscleHover"
        @muscle-leave="handleMuscleLeave"
      />

      <!-- 人体图组件 -->
      <BodyMap ref="bodyMap" />
      
      <!-- 时间线组件 -->
      <Timeline />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import AcupointSelector from '../components/AcupointSelector.vue'
import BodyMap from '../components/BodyMap.vue'
import Timeline from '../components/Timeline.vue'

export default {
  name: 'Home',
  components: {
    Header,
    AcupointSelector,
    BodyMap,
    Timeline
  },
  methods: {
    handleAcupointHover(acupointIds) {
      this.$refs.bodyMap.highlightAcupoint(acupointIds)
    },
    handleAcupointLeave(acupointIds) {
      this.$refs.bodyMap.resetAcupointHighlight(acupointIds)
    },
    handleMuscleHover(groupId) {
      this.$refs.bodyMap.highlightMuscleGroup(groupId)
    },
    handleMuscleLeave(groupId) {
      this.$refs.bodyMap.resetMuscleHighlight(groupId)
    }
  }
}
</script>

<style scoped>
/* 样式已通过全局CSS导入 */
</style>