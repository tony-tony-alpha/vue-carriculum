<template>
    <ul class="task-list">
        <li v-for="task in tasks" :key="task.id" class="task-list__item">
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
import { ref } from 'vue';
import TaskItem from './TaskItem.vue';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const tasks = ref<Task[]>([
    { id: 1, title: 'Buy Milk', completed: false },
    { id: 2, title: 'Buy Bread', completed: true },
    { id: 3, title: 'Buy Eggs', completed: false },
]);

function deleteTask(title: string) {
    tasks.value = tasks.value.filter(task => task.title !== title);
}

function updateTask(title: string, newStatus: boolean) {
    const task = tasks.value.find(t => t.title === title)
    if (task) {
        task.completed = newStatus;
    }
}

</script>

<style scoped>
.task-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.task-list__item {
    margin-bottom: 10px;
}

</style>