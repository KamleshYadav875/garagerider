
const loginButton = document.querySelector('.login-btn');
const registerButton = document.querySelector('.register-btn');
const formContainerSection = document.querySelector('.form-container');
const logoSection = document.querySelector('.logo-section');
const loginSection = document.querySelector('.login-section');
const registerSection = document.querySelector('.register-section');

loginButton.addEventListener('click', () =>{
    formContainerSection.classList.remove('active');
    logoSection.classList.remove('active');
    loginSection.classList.remove('close');
    formContainerSection.classList.add('active');
    logoSection.classList.add('active');
    registerSection.classList.add('close');

})

registerButton.addEventListener('click', () =>{
    formContainerSection.classList.remove('active');
    logoSection.classList.remove('active');
    registerSection.classList.remove('close');
    formContainerSection.classList.add('active');
    logoSection.classList.add('active');
    loginSection.classList.add('close');
})
