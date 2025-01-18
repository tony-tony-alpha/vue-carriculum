<template>
  <div>
    <p>{{ props.title }}</p>
    <button @click="updateTitle('TaskItem')">Update</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'update:title', value: string): void;
}>();

const updateTitle = (value: string) => {
  emit('update:title', value);
};

</script>

<style scoped>
</style>
