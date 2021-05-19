const input = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");
const beginNameLabel = nameLabel.textContent;
// console.log(input);
// console.log(nameLabel);
// console.log(beginNameLabel)
input.addEventListener('input', onInputChange);

function onInputChange(event) {
    // console.log(event.currentTarget.value)
    event.currentTarget.value.length !== 0 ?
        nameLabel.textContent = event.currentTarget.value :
        nameLabel.textContent = beginNameLabel;
}