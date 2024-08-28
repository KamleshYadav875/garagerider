
const loginButton = document.querySelector('.login-btn');
const registerButton = document.querySelector('.register-btn');
const formContainerSection = document.querySelector('.form-container');
const logoSection = document.querySelector('.logo-section');
const loginSection = document.querySelector('.login-section');
const registerSection = document.querySelector('.register-section');

const backButton = document.querySelector('.back-button');


loginButton.addEventListener('click', () =>{
    if(formContainerSection.classList.contains("active"))
    {
        formContainerSection.classList.remove('active');
    }
    if(logoSection.classList.contains("active"))
    {
        logoSection.classList.remove('active');
    }
    if(loginSection.classList.contains("active"))
    {
        loginSection.classList.remove('active');
    }
    if(loginSection.classList.contains("close"))
    {
        loginSection.classList.remove('close');
    }
    formContainerSection.classList.add('active');
    logoSection.classList.add('active');
    registerSection.classList.add('close');

})

registerButton.addEventListener('click', () =>{
    if(formContainerSection.classList.contains("active"))
    {
        formContainerSection.classList.remove('active');
    }
    if(logoSection.classList.contains("active"))
    {
        logoSection.classList.remove('active');
    }
    if(registerSection.classList.contains("active"))
    {
        registerSection.classList.remove('active');
    }
    if(registerSection.classList.contains("close"))
    {
        registerSection.classList.remove('close');
    }
    formContainerSection.classList.add('active');
    logoSection.classList.add('active');
    loginSection.classList.add('close');
})

backButton.addEventListener('click', () =>
{
    if(formContainerSection.classList.contains('active'))
    {
        formContainerSection.classList.remove('active');
    }
    if(logoSection.classList.contains("active"))
    {
        logoSection.classList.remove('active');
    }
    if(registerSection.classList.contains("active"))
    {
        registerSection.classList.remove('active');
    }
    if(loginSection.classList.contains("active"))
    {
        loginSection.classList.remove('.active');
    }
    
})
