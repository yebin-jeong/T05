import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '@/views/MainPage.vue';
import MyPage from '@/views/MyPage.vue';
import HouseNoticePage from '@/views/HouseNoticePage.vue';
import FAQPage from '@/views/FAQPage.vue';
import ComparePage from '@/views/ComparePage.vue';
import HouseNoticeDetailPage from '@/views/HouseNoticeDetailPage.vue';

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
    },
    {
        path: '/FAQPage',
        name: 'FAQPage',
        component: FAQPage
    },
    {
        path: '/ComparePage',
        name: 'ComparePage',
        component: ComparePage
    },
    {
        path: '/HouseNoticeDetailPage',
        name: 'HouseNoticeDetailPage',
        component: HouseNoticeDetailPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router