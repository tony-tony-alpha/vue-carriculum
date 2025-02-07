<template>
  <main>
    <div class="main-layout">
      <Sidebar></Sidebar>
      <div class="content">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import Sidebar from './pages/SideBar.vue';
</script>

<style scoped>
.main-layout {
  display: flex;
  width: 100%;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>