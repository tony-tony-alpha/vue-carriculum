<template>
    <div class="task-detail-page">
        <h1 class="task-detail-page__title">Task Detail</h1>
        <p class="task-detail-page__id">Task ID: {{ taskId }}</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const taskId = route.params.id;
</script>

<style scoped>
</style>