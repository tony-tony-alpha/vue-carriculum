<template>
    <div class="task-item">
        <input type="checkbox" :checked="checked" @change="onToggle" class="task-item__checkbox" />
        <span class="task-item__title">{{ title }}</span>
        <button v-if="checked" @click="onDelete" class="task-item__delete">Delete</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: 'update:task', title: string, newStatus: boolean): void;
  (e: 'delete:task'): void;
}>();

// const isChecked = computed(() => props.checked)

function onDelete() {
  emit('delete:task');
}

function onToggle(e: Event) {
  const newStatus = (e.target as HTMLInputElement).checked;
  emit('update:task', props.title, newStatus);
}

</script>

<style scoped>
.task-item {
    display: flex;
    align-items: center;
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
}

.task-item__checkbox {
    margin-right: 10px;
}

.task-item__title {
    flex: 1;
}

.task-item__delete {
    background-color: #ff5555;
    color: #fff;
    border: none;
    padding: 4px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.task-item__delete:hover {
    background-color: #ff3333;
}

</style>
