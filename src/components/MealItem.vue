<!--Компонент для показа блюд на главной странице по пойску по имени и стили для блюд-->

<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <!--Ссылка для того что бы всякий раз когда пользователь нажимет на картину блюда
    сразу же стрница перелистывается на страницу блюда со всякими деталями связанный с блюдом с помощью router link-->
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between mb-4 ml-4">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "../components/YouTubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
