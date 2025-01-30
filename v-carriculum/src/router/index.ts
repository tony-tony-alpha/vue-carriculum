import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../pages/LoginPage.vue';
import TodoPage from '../pages/TodoPage.vue';
import TaskDetailPage from '../pages/TaskDetailPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
const routes = [
    { path: '/login', component: LoginPage },
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

const isAuthenticated = true
router.beforeEach((to, from, next) => {
    if (to.path === '/todo' && !isAuthenticated) {
        next({ path: '/login' });
    } else {
        next();
    }
})



export default router;
