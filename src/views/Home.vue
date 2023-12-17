<!--Проект связааный с блюдами и их рецептами. В этом проекте я написал
главную страницу где будут каждый раз выходить 12 рандомных блюд, в котором у каждого блюда будет своя 
отдельная в которую можно заходить и в которых будет написаны рецепты и как готовить это блюдо. 
На этом проекте можно искать блюда по ингридиентам, по названию и по буквам. 
Проект написан на VUE3, VUEX, Vite, Tailwind и в качестве API data я использовал сайт themealDB
от которого я брал данные блюд с помощью axios -->

<template>
  <div class="flex flex-col p-8">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";

const meals = ref([]);
const ingredients = ref([]);

onMounted(async () => {
  for (let i = 0; i < 12; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
