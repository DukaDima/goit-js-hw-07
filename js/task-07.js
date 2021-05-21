const range = document.getElementById("font-size-control");
const text = document.getElementById("text")

console.log(range);
console.log(text);

range.min = 20
range.max = 100
range.step = 1


range.onchange = function() {
    console.log(this.value)
  text.style.fontSize = this.value+"px"
}


