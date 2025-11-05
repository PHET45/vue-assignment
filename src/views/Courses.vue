<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <!-- TODO: แสดงจำนวนคอร์สที่ถูกใจจาก store -->
      <p>❤️ ถูกใจแล้ว {{ favoriteStore.favorites.length }} คอร์ส</p>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <!-- TODO: v-model username -->
      <input v-model="favoriteStore.username" placeholder="กรอกชื่อของคุณ" />
    </div>

    <div class="course-list">
      <!-- TODO: Render CourseCard -->
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CourseCard from "../components/CourseCard.vue";
import { useFavoriteStore } from "../stores/favorite";
import axios from "axios";

const favoriteStore = useFavoriteStore(); 
const courses = ref([]);

onMounted(async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  console.log(response.data);
  courses.value = response.data;
});

// TODO: import axios
// TODO: import { useFavoriteStore } จาก "../stores/favorite"


// TODO: ดึงข้อมูลจาก API ด้วย axios.get() แล้วเก็บใน courses
// TODO: ใช้ store เพื่อเข้าถึง username และ favorites
</script>

<style scoped>
.page-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
.course-list {
  margin-top: 24px;
}
</style>
