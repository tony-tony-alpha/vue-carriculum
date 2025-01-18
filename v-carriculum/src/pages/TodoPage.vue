<template>
    <div class="todo-page">
        <h1 class="todo-page__title">My Tasks</h1>
        <TaskList />
    </div>
</template>

<script setup lang="ts">
import TaskList from '../components/TaskList.vue';
</script>

<style scoped>
.todo-page {
    max-width: 600px;
    margin: 20px auto;
    font-family: sans-serif;
}

.todo-page__title {
    text-align: center;
}
</style>
