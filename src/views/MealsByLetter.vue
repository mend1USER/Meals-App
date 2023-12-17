<template>
  <div class="flex justify-center gap-2 mt-2">
    <!--раздел для пойска блюд по буквам первое это иттерация по буквам
  и будет пушить в другую страницу с именем byLetter и в параметре будет
   показывать ту букву в которую пользователь нажал и у каждой старницы будет свой идентичный ключ-->
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, watch } from "vue";
import store from "../store";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); //переменная в которой находяться все буквы и метод split который будет отдолять их пустой строкой
const meals = computed(() => store.state.mealsByLetter);

//опция watch во ВЬЮ которая будет раегировать на изменения данных
//и при изменений будет выпольнять действия на моем примере я сделал
//функцию которая будет следить за кликами на буквы когда юзер начнет искать рецепты
//и если он нажмет на определенную кнопку то опция watch применит изменения которая поменяет на букву на которую нажади
watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
