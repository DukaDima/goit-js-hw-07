const refs = {
    login: document.querySelector('.login'),
    message: document.querySelector('.message'),
    button: document.querySelector('.button'),
    wrapper: document.querySelector('.wrapper'),
    form: document.querySelector('.form'),
};

console.dir(refs.form);
refs.form.style.display = 'flex';
refs.form.style.flexDirection = 'column';
refs.form.style.maxWidth = '300px'
refs.button.addEventListener('click', (event) => {
    
    const messageNew = refs.message.value;
    const login = refs.login.value;
    const element = document.createElement('div');


    const messageValue = document.createElement('p');
    messageValue.textContent = messageNew;

    const loginValue = document.createElement('p');
    loginValue.textContent = login;

    element.append(messageValue, loginValue);
    console.log(element)
    
    refs.wrapper.append(element);
})
console.dir(refs)
