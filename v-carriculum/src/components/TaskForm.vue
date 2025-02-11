<template>
    <form class="task-form">
        <input
            type="text"
            v-model="title"
            placeholder="Task Title"
            class="task-form__input"
        />
        <p v-if="errorMessage" class="task-form__error">{{ errorMessage }}</p>
        <button type="submit" :disabled="!isFormValid" @click.prevent="onSubmit" class="task-form__button">Add Task</button>
    </form>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useField } from 'vee-validate';
import * as yup from 'yup';
import type { Task } from '../pages/TodoPage.vue';

const emit = defineEmits<{
    (e: 'add-task', task: Task): void;
}>();

const titleSchema = yup.string().required('Task title cannot be empty').max(20, 'Task title cannot be longer than 20 characters');
const { value: title, errorMessage, resetField } = useField<string>('title', titleSchema);

const onSubmit = () => {
    const t: Task = {
        id: Math.random(),
        title: title.value,
        completed: false,
    };
    emit('add-task', t);
    resetField();
}

const isFormValid = computed(()=> !errorMessage.value && title.value);
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

.task-form__error {
    color: red;
}
</style>
