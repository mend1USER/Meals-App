import axiosClient from "../axiosClient";
//сначала передаем в функцию метод commit и keyword первый для того что бы вызвать мутацию в начальном состояний
// затем в action делаем запрос на сервер с помощью axios с get запросом который взяли с сайта MEALDB и параметр должен быть равен к ключевому слову
//и когда ответ приходит вызываем мутацию setSearchedMeals с ответами из данных для обновления состояние
export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

//В остальных функциях в запросом все также повторяется как и с пойском еды по ключевому слову та же мутация и тот же стэйт
// но только в запросах на них как параметр пишем соответствующий параметр
export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}

export function searchMealsByIngredient({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
  });
}
