import state from "./state";

//затем setSearchedMeals который принимает state и в качестве аргумента meals
//мутация обновляет свойсто searchedMeals с данными  meals или пустым массивом если meals нету
export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals || [];
}

export function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals || [];
}

export function setMealsByIngredient(state, meals) {
  state.mealsByIngredient = meals || [];
}

export function setIngredient(state, ingredient) {
  state.ingredient = ingredient;
}
