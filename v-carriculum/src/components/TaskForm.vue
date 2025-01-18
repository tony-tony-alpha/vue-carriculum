<template>
    <form>
        <input
            type="text"
            v-model="task.title"
            placeholder="Task Title"
        />
        <button type="submit" @click.prevent="addTask">Add Task</button>
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