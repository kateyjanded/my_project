import LoginPage from '@/components/LoginPage.vue';
import VideoAnalysis from '@/components/VideoAnalysis.vue';

import { createRouter, createWebHistory } from 'vue-router';// Example component for another page

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/home',
        name: 'Home',
        component: VideoAnalysis,
    },
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


