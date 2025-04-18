import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入全局CSS
import '../css/normalize-5.0.0.min.css'
import '../css/all.css'
import '../css/home.css'
import '../css/timeline.css'
import '../css/showbox.css'
import '../css/jarallax.css'
import '../css/change.css'
import '../css/sidebar.css'

// 创建Vue应用
const app = createApp(App)

// 使用路由
app.use(router)

// 挂载应用
app.mount('#app')