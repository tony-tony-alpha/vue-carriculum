<template>
    <div class="todo-page">
        <h1 class="todo-page__title">My Tasks</h1>
        <TaskForm @add-task="addTask" />
        <TaskList
            :tasks="tasks"
            @delete:task="deleteTask"
            @update:task="updateTask"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskList from '../components/TaskList.vue';
import TaskForm from '../components/TaskForm.vue';

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const tasks = ref<Task[]>([
    { id: 1, title: 'Buy Milk', completed: false },
    { id: 2, title: 'Buy Bread', completed: true },
    { id: 3, title: 'Buy Eggs', completed: false },
]);


const addTask = (task: Task) => {
    const t = { ...task };
    tasks.value.push(t);
};

const deleteTask = (title: string) => {
    tasks.value = tasks.value.filter(task => task.title !== title);
};

const updateTask = (title: string, newStatus: boolean) => {
    const task = tasks.value.find(task => task.title === title);
    if (task) {
        task.completed = newStatus;
    }
};

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
