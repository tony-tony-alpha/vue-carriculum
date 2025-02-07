<template>
    <div class="sidebar">
        <h1>My App</h1>
        <nav>
            <router-link to="/todo">Todo</router-link>
            <router-link to="/login">Login</router-link>
        </nav>
    </div>
</template>

<script setup lang="ts">
// import { useUserStore } from '../store/useUserStore';

// const userStore = useUserStore()


</script>

<style scoped>
.sidebar {
    width: 200px;
    padding: 20px;
    background-color: #fff7db;
}

.sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.sidebar nav a {
    text-decoration: none;
    color: #9e9545;
    font-size: 18px;
    font-weight: bold;
}

</style>
