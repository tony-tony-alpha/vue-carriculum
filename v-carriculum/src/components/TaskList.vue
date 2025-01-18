<template>
    <ul class="task-list">
        <li v-for="task in props.tasks" :key="task.id" class="task-list__item">
            <TaskItem
                :title="task.title"
                :completed="task.completed"
                @delete:task="deleteTask"
                @update:task="updateTask"
            />
        </li>
    </ul>
</template>

<script setup lang="ts">
import TaskItem from './TaskItem.vue';
import type { Task } from '../pages/TodoPage.vue';

const props = defineProps<{
    tasks: Task[];
}>();

const emits = defineEmits<{
    (e: 'delete:task', title: string): void;
    (e: 'update:task', title: string, newStatus: boolean): void;
}>();


function deleteTask(title: string) {
    emits('delete:task', title);
}

function updateTask(title: string, newStatus: boolean) {
    emits('update:task', title, newStatus);
}

</script>

<style scoped>
.task-list {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 2rem;
}

.task-list__item {
    margin-bottom: 10px;
}

</style>