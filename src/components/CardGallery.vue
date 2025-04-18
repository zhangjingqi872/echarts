<template>
  <div class="showbox">
    <ul class="cards">
      <li class="card" 
          v-for="(card, index) in cards" 
          :key="index"
          :class="{ 'card--current': currentIndex === index, 
                    'card--out': currentIndex === index - 1 || (currentIndex === 0 && index === cards.length - 1),
                    'card--next': currentIndex === index + 1 || (currentIndex === cards.length - 1 && index === 0) }"
          @click="selectCard(index)">
        <div class="card__content">
          <div class="card__front">
            <h3>{{ card.title }}</h3>
            <img :src="card.image" :alt="card.title">
          </div>
          <div class="card__back">
            <p>{{ card.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CardGallery',
  setup() {
    const cards = ref([
      {
        title: '八段锦',
        image: 'images/qigong.jpg',
        description: '八段锦是一种古老的中国传统健身功法...'
      },
      {
        title: '五禽戏',
        image: 'images/wqx+yjj.jpg',
        description: '五禽戏是模仿五种动物的动作和神态...'
      },
      // 其他卡片数据...
    ])

    const currentIndex = ref(0)

    const selectCard = (index) => {
      currentIndex.value = index
    }

    return {
      cards,
      currentIndex,
      selectCard
    }
  }
}
</script>

<style scoped>
/* 样式已通过全局CSS导入 */
</style>
