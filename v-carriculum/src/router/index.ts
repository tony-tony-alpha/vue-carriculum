import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../pages/LoginPage.vue';
import TodoPage from '../pages/TodoPage.vue';
import TaskDetailPage from '../pages/TaskDetailPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import { useUserStore } from '../store/useUserStore';
import UserProfilePage from '../pages/UserProfilePage.vue';

const routes = [
    { path: '/login', component: LoginPage },
    { path: '/user_profile', component: UserProfilePage },
    {
        path:'/todo',
        children: [
            { path: '', component: TodoPage }, // /todo
            { path: ':id', component: TaskDetailPage }, // /todo/123
        ]
    },
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// const isAuthenticated = false


router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    if (to.path !== '/login' && !userStore.isAuthenticated) {
        next({ path: '/login' });
    } else {
        next();
    }
})



export default router;
