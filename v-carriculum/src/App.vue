<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <TaskItem :title="title" @update:title="updateTitle" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskItem from './components/TaskItem.vue';
const title = ref('Vue Curriculum');
const description = ref('Vue Curriculum Description');

const updateTitle = (value: string) => {
  title.value = value;
};
</script>

<style scoped>
h1 {
  color: red;
}

p {
  color: blue;
}
</style>
