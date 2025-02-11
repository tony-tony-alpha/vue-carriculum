<template>
    <div class="login-page">
        <h1 class="login-page__title">Login</h1>
        <UserForm @login="redirectToTasks" />
    </div>
</template>

<script setup lang="ts">
import UserForm from '../components/UserForm.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const redirectToTasks = () => {
    router.push('/todo');
}
</script>   

<style scoped>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>