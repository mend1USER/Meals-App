<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mv-4">Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white borer-gray-200 w-full mb-3 mt-3"
      placeholder="Search for Ingredients"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import axiosClient from "../axiosClient";
import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import store from "../store";

const ingredients = ref([]);
const router = useRouter();
const keyword = ref("");

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;

  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  store.commit("setIngredient", ingredient);
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
