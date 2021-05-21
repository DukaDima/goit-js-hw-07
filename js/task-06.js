const input = document.querySelector("#validation-input");
// console.dir(input)
const checkValue = Number(input.dataset.length)
// console.log(checkValue)
// console.log(typeof (checkValue))

const inputValue = input.addEventListener('input', onInputChange);
input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);

let inputValuelength
function onInputChange(event) {
    return inputValuelength = event.currentTarget.value.length
}



function onInputFocus() {
    // console.log('Инпут получил фокус')
    input.classList.add("#validation-input")
    input.classList.remove("valid");
    input.classList.remove("invalid");
    
}

function onInputBlur() {
    if (inputValuelength !== 0) {
        input.classList.remove("#validation-input")
        inputValuelength === checkValue ?
            // console.log(1) : console.log(2);
            input.classList.add("valid") :
            input.classList.add("invalid");
    }
}