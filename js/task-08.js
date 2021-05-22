const input = document.querySelector('[type="number"]')
const renderButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
const divBoxes = document.getElementById("boxes")
console.log(input)
console.log(renderButton)
console.log(destroyButton)
console.log(divBoxes)
let num 

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(Number(event.currentTarget.value))
    num = Number(event.currentTarget.value)

}

renderButton.addEventListener('click', onRender);


function onRender() {
    console.log(num)



    const divList=[]
    for (let i = 0; i < num; i += 1) {
     divList.push(document.createElement('div'))
    }
    divBoxes.append(...divList)
  


    
}

  

destroyButton.addEventListener('click', onDestroy);

function onDestroy() {
    console.log('click-');

    divBoxes.innerHTML = ''
    input.value = ''
    num=''
}
const div = document.createElement('div')
divBoxes.append(div)