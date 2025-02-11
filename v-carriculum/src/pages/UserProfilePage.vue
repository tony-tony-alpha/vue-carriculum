<template>
    <div>
        <h1>User Profile</h1>
        <p>user name: {{ user?.name }}</p>
        <button @click="logout">Logout</button>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../store/useUserStore';
import { useRouter } from 'vue-router';
const userStore = useUserStore()
const user = userStore.userProfile
const router = useRouter()

const logout = () => {
    userStore.logout()
    router.push('/login')
}
</script>

<style scoped>

</style>