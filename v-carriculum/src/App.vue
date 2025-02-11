<template>
  <main>
    <div class="main-layout">
      <div v-if="isAuthenticated" class="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from './pages/SideBar.vue';
import { useUserStore } from './store/useUserStore';
import { computed } from 'vue';
const userStore = useUserStore()
const isAuthenticated = computed(() => userStore.isAuthenticated)
</script>

<style scoped>
.main-layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  padding: 20px;
  background-color: #fff7db;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>