import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Change from '../views/Change.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/change',
        name: 'Change',
        component: Change
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router