const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('#value');

let counterNum = Number(counter.textContent);
// console.log(typeof(counterNum))
// console.log(counterNum)
// console.log(incrementButton);
// console.log(decrementButton);

incrementButton.addEventListener('click', onIncrement);

function onIncrement() {
    // console.log('click+');
     counter.textContent=counterNum += 1;
}

decrementButton.addEventListener('click', onDecrement);

function onDecrement() {
    // console.log('click-');
      counter.textContent=counterNum -= 1;
}