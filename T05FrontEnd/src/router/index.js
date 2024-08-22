import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '@/views/MainPage.vue';
import MyPage from '@/views/MyPage.vue';
import HouseNoticePage from '@/views/HouseNoticePage.vue';

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/TestPage',
        name: 'TestPage',
        component: MyPage
    },
    {
        path: '/HouseNoticePage',
        name: 'HouseNoticePage',
        component: HouseNoticePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router