const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector("#ingredients")
listIngredients.textContent="ИНГРЕДИЕНТЫ:"
// console.log(listIngredients);

function createListIngredients(array) {
   const acc = [];
    array.forEach(el => {
            const listEl = document.createElement("li");
            listEl.classList.add(".list_item")
            listEl.textContent = `${el}`     
            acc.push(listEl)
    })
   return acc
}

listIngredients.append(...createListIngredients(ingredients))