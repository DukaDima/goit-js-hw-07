const range = document.getElementById("font-size-control");
const text = document.getElementById("text")

console.log(range);
console.log(text);
// Диапазон и шаг
range.min = 20
range.max = 100
range.step = 1
// Начальные значения
range.value = 60
text.style.fontSize =range.value+"px"

// Динамические значения
range.onchange = function() {
    console.log(this.value)
  text.style.fontSize = this.value+"px"
}


