<template>
  <div class="course-list">
    <div class="course-card">
      <h3>ชื่อคอร์ส: {{ course.title }}</h3>
      <p>ราคา: {{ course.price }} บาท</p>

      <button
        :class="{ added: isAdded || !hasName }"
        :disabled="isAdded || !hasName"
        @click="addToFavorite"
      >
        <!-- เปลี่ยนข้อความตามเงื่อนไข -->
        {{ !hasName ? "กรุณากรอกชื่อก่อน" : isAdded ? "เพิ่มแล้ว" : "เพิ่มในรายการโปรด" }}
      </button>

    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useFavoriteStore } from "../stores/favorite";

const favoriteStore = useFavoriteStore();

const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
});

// ✅ เช็คว่ามีการกรอก username หรือยัง
const hasName = computed(() => favoriteStore.username.trim() !== "");

// ✅ เช็คว่า course ถูกเพิ่มแล้วหรือยัง
const isAdded = computed(() =>
  favoriteStore.favorites.some((c) => c.id === props.course.id)
);

function addToFavorite() {
  if (!isAdded.value && hasName.value) {
    favoriteStore.addFavorite(props.course);
  }
}
</script>

<style scoped>
.course-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: auto;
  padding: 16px;
}

.course-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  padding: 12px 16px;
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: black;
}

p {
  margin: 0;
  color: #555;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

button.added {
  background-color: #bfbfbf;
  cursor: not-allowed;
}

button:hover:not(.added) {
  background-color: #2c9c6d;
}
</style>
