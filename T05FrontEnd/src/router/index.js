import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '@/views/MainPage.vue';
import TestPage from '@/views/TestPage.vue';

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/TestPage',
        name: 'TestPage',
        component: TestPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router