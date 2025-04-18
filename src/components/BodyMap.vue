<template>
  <div class="body-box">
    <!-- 前视图 -->
    <svg viewBox="0 0 660.46 1206.46" fill="white" xmlns="http://www.w3.org/2000/svg" 
         class="w-screen lg:w-full mc:h-[700px] 2xl:h-[90vh] 3xl:h-[95vh] 4xl:h-screen sm:mx-auto object-fit menor">
      <defs>
        <!-- SVG样式已移至组件的style块 -->
      </defs>
      
      <!-- 身体部位分组 -->
      <g id="calves" class="bodymap">
        <path d="M..."/> <!-- 实际路径数据 -->
      </g>
      <!-- 其他身体部位... -->
      
      <!-- 穴位点 -->
      <g id="acupoints" style="display:block">
        <!-- 手三里穴 -->
        <g id="shousanli-left" class="acupoint-group">
          <circle cx="150" cy="350" r="8" />
        </g>
        <!-- 其他穴位... -->
      </g>
    </svg>
    
    <!-- 后视图 -->
    <svg viewBox="0 0 660.46 1206.46" fill="none" xmlns="http://www.w3.org/2000/svg" 
         class="w-screen lg:w-full mc:h-[700px] 2xl:h-[90vh] 3xl:h-[95vh] 4xl:h-screen sm:mx-auto object-fit menor">
      <!-- 后视图SVG内容 -->
    </svg>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'BodyMap',
  setup() {
    const bodyPartMap = ref({
      // ...保持原有bodyPartMap数据...
    })

    const acupointNames = ref({
      // ...保持原有acupointNames数据...
    })

    const muscleGroups = ref({
      // ...保持原有muscleGroups数据...
    })

    const yongquanHighlight = ref(null)

    // 高亮穴位
    const highlightAcupoint = (id, isPersistent = false) => {
      const element = document.getElementById(id)
      if (element) {
        element.classList.add(isPersistent ? 'active' : 'hover')
        if (id.includes('yongquan')) {
          createYongquanHighlight(id, isPersistent)
        }
      }
    }

    // 重置穴位高亮
    const resetAcupointHighlight = (id) => {
      const element = document.getElementById(id)
      if (element) {
        element.classList.remove('hover', 'active')
        if (id.includes('yongquan')) {
          removeYongquanHighlight()
        }
      }
    }

    // 高亮肌肉群
    const highlightMuscleGroup = (groupId) => {
      const muscles = muscleGroups.value[groupId] || []
      muscles.forEach(id => {
        const element = document.getElementById(id)
        if (element) {
          element.classList.add('hover')
        }
      })
    }

    // 重置肌肉群高亮
    const resetMuscleHighlight = (groupId) => {
      const muscles = muscleGroups.value[groupId] || []
      muscles.forEach(id => {
        const element = document.getElementById(id)
        if (element) {
          element.classList.remove('hover')
        }
      })
    }

    // 创建涌泉穴高亮
    const createYongquanHighlight = (id, isPersistent = false) => {
      removeYongquanHighlight()
      
      const svg = document.querySelector('.body-box svg')
      if (!svg) return

      const yongquanGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      yongquanGroup.id = 'yongquan-highlight'
      yongquanGroup.classList.add('yongquan-point', isPersistent ? 'active' : 'hover')

      const isLeft = id === 'yongquan-left'
      const x = isLeft ? 250 : 410
      const y = 1150

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      circle.setAttribute('cx', x)
      circle.setAttribute('cy', y)
      circle.setAttribute('r', 15)
      circle.setAttribute('class', 'acupoint')
      circle.setAttribute('fill', isPersistent ? '#ff5500' : '#f77a14')
      circle.setAttribute('opacity', '0.8')

      const centerPoint = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      centerPoint.setAttribute('cx', x)
      centerPoint.setAttribute('cy', y)
      centerPoint.setAttribute('r', 5)
      centerPoint.setAttribute('fill', '#ffb700')
      centerPoint.setAttribute('stroke', '#ffffff')
      centerPoint.setAttribute('stroke-width', '2')

      yongquanGroup.appendChild(circle)
      yongquanGroup.appendChild(centerPoint)

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('x', x)
      text.setAttribute('y', y - 25)
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('fill', '#ffffff')
      text.setAttribute('font-size', '14')
      text.setAttribute('font-weight', 'bold')
      text.textContent = '涌泉穴'

      yongquanGroup.appendChild(text)
      svg.appendChild(yongquanGroup)
      yongquanHighlight.value = yongquanGroup
    }

    // 移除涌泉穴高亮
    const removeYongquanHighlight = () => {
      const highlight = document.getElementById('yongquan-highlight')
      if (highlight) {
        highlight.remove()
        yongquanHighlight.value = null
      }
    }

    return {
      bodyPartMap,
      acupointNames,
      muscleGroups,
      highlightAcupoint,
      resetAcupointHighlight,
      highlightMuscleGroup,
      resetMuscleHighlight
    }
  }
}
</script>

<style scoped>
/* 从SVG内联移动的样式 */
.bodymap { fill: currentColor; transition: fill 0.3s ease; }
.bodymap:hover { fill: #f77a14; }
.acupoint-group { fill: #7990b9; opacity: 0.8; }
.acupoint-group.hover { fill: #f77a14; }

/* 样式已通过全局CSS导入 */
</style>
