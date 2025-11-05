<template>
  <div class="page-container">
    <h2>📋 Summary</h2>
    <!-- TODO: ดึง username และ favorites.length จาก store -->
    <p>ชื่อผู้ใช้: {{ favoriteStore.username }}</p>
    <p>จำนวนคอร์สที่ถูกใจ: {{ favoriteStore.favorites.length }}</p>
  </div>
</template>

<script setup>
// TODO: import { useFavoriteStore }
import { useFavoriteStore } from "../stores/favorite";
const favoriteStore = useFavoriteStore();
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}
</style>
