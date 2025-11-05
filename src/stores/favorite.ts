// TODO1: สร้าง store ชื่อ useFavoriteStore
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteStore = defineStore("favoriteStore", () => {
 
    const username = ref("");
    const favorites = ref([]);
  
    const setUsername = (name: string) => {
      username.value = name;
    };
  
    const addFavorite = (course: string) => {
      const exists = favorites.value.some((c: any) => c.id === course.id);
      if (!exists) {
        favorites.value.push(course);
      }
    };
  
    return {
      username,
      favorites,
      setUsername,
      addFavorite,
    };
  });
// state:
//   username (string)
//   favorites (array)
// actions:
//   setUsername(name) → เก็บชื่อผู้ใช้
//   addFavorite(course) → เพิ่มคอร์สใน favorites
