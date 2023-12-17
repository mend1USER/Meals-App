<!--Компонент для пойска еды по названиям в input-->

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 tex-orange-500">Search Meals by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <!--Обозначяем v-model реактивной переменной keyword ддля двусторннего связывания-->
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus: border-orange-500 w-full"
      placeholder="Search for meals"
      @change="searchMeals"
    />
    <!--событие @change для отслеживания изменеий -->
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword = ref(""); //реактивная переменная для изменения запроса прямо с сервера в реальном времени
//мы импользуем VUEX для изменения состояния сперва мы в state передаем состояние для searchedMeals
//потом мы в action пишем функция что бы сделать запрос на сервер через который будет приходить все данные API и в конце вызываем мутация что бы обновлять состояние
//и в самом компоненте мы пишем функцию самого searchMeals для изменения состояние на экране
const meals = computed(() => store.state.searchedMeals);

//потом в функций сначала проверяет есть ли значение в input,
//то выполняется код который мы писали во VUEX с помощью метода dispatch который
//используется для вызова action который выполняет асинхронные функций и могут вызвать мутаций
//а если input пустой или не совпадает с ключевым словом то пойск не пройзводиться
function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

//С помощью хука onMounted выполняет функцию которая была добавлена в DOM с помощью
//мы пишем функцию что бы оставлять данные блюда даже после обнавлениня что бы было удобно пользователю
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
