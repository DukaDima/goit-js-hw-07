const categories = document.querySelector("#categories");
// console.log(categories)
const numberOfCategories = categories.querySelectorAll(".item");
// console.log(numberOfCategories)
console.log(`В списке ${numberOfCategories.length} категории`);

function listOfCategories() {
    numberOfCategories.forEach(category => {
        const title = category.querySelector("h2").textContent;
        console.log(`Категория: ${title}`);
        const numOfElements = category.querySelectorAll("li").length;
        console.log(`Количество єлементов: ${numOfElements}`)

    })
};
listOfCategories()