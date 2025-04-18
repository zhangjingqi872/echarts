<template>
  <div class="shell-top">
    <h1>数据可视化<br/>上海体育大学</h1>
    <h3 style="font-family: 'tit';color: #b2810ea9;font-size: 250px;font-weight: 400;position: absolute;top:90px;right:10%;text-align: center;">
      导引术中的
    </h3>
    <div class="background" ref="background">
      <span style="font-family: 'tit';font-weight: bolder;"><br>道法自然</span>
    </div>
    <h2>
      导引术，医疗技术。秦汉时期，医学的进步，直接带动了导引术的发展。 
      当时对人体各器官的结构和功能就已经有了大体的了解， 
      西汉时期医学名著《黄帝内经》中就有"诸筋者，皆属于节"， 
      "胸腹者，藏腹之郭也"。这指的是人体结构。
    </h2>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Header',
  setup() {
    const background = ref(null)

    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY !== 0) {
        background.value.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
      } else {
        background.value.style.backgroundPosition = ''
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      background
    }
  }
}
</script>

<style scoped>
/* 样式已通过全局CSS导入 */
</style>
