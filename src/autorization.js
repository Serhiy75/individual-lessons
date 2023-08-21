import {checkUser, getUser } from './usersAppi.js';


const refs = {
    userFormLogin: document.querySelector('.js-autorization'),
   
};

refs.userFormLogin.addEventListener('submit', onUserFormLoginSubmit);


function onUserFormLoginSubmit (evt) {
    evt.preventDefault();
    location.pathname = '';
    const userLogin = evt.target.elements.login.value;
    const userPassword = evt.target.elements.password.value;
    checkUser(userLogin, userPassword).then(user => {
        if(user.length > 0){
            localStorage.setItem('user', JSON.stringify(user))
            location.pathname = '';
        } 
    })
};