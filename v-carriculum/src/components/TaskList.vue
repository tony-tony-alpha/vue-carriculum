<template>
    <ul class="task-list">
        <li v-for="task in props.tasks" :key="task.id" class="task-list__item">
            <TaskItem
                :id="task.id"
                :title="task.title"
                :checked="task.checked"
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
    (e: 'delete:task'): void;
    (e: 'update:task', title: string, newStatus: boolean): void;
}>();


function deleteTask() {
    emits('delete:task');
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