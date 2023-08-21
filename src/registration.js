import {createUser} from './usersAppi.js'

const refs  = {
    registrationForm: document.querySelector('.js-registration'),
}

refs.registrationForm.addEventListener('submit', onRegistrFormSubmit);

function onRegistrFormSubmit (evt) {
    evt.preventDefault();
    location.pathname = '';
    const nameInput = evt.target.elements.name.value;
    const emailInput = evt.target.elements.email.value;
    const loginInput = evt.target.elements.login.value;
    const passwordInput = evt.target.elements.password.value;

    const objRegistr = {
        name: nameInput,
        email: emailInput,
        login: loginInput,
        password: passwordInput
    }
    createUser(objRegistr).then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        location.pathname = '';
    })
};
