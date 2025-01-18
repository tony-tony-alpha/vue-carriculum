<template>
    <form class="task-form">
        <input
            type="text"
            v-model="task.title"
            placeholder="Task Title"
            class="task-form__input"
        />
        <button type="submit" @click.prevent="addTask" class="task-form__button">Add Task</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from '../pages/TodoPage.vue';

const task = ref<Task>({
    id: Math.random(),
    title: '',
    completed: false,
});

const emit = defineEmits<{
    (e: 'add-task', task: Task): void;
}>();

const addTask = () => {
    if (task.value.title.trim() === '') return;
    emit('add-task', task.value);
    task.value.title = '';
};

</script>

<style scoped>
.task-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.task-form__input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}

.task-form__button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}

.task-form__button:hover {
    background-color: #007bff;
    color: white;
}
</style>