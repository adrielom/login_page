let emailInput = document.querySelector('.email-input')
let passwordInput = document.querySelector('.password-input')
let button =document.querySelector('.login-button')
let rememberMe = document.querySelector('input[type="checkbox"]')
let isEmailInputEmpty = true
let isPasswordInputEmpty = true
rememberMe.checked = false

button.addEventListener('click', ValidarFormulario)
emailInput.addEventListener('input', ValidarCampo)
passwordInput.addEventListener('input', ValidarCampo)


function Init() {
    let loginInfo = sessionStorage.getItem('loginInfo')
    console.log(loginInfo)
    if (loginInfo !== undefined && loginInfo !== null) {
        let parsedLoginInfo = JSON.parse(loginInfo)
        rememberMe.checked = true
        emailInput.value = parsedLoginInfo.email
        passwordInput.value = parsedLoginInfo.password
        button.disabled = false
    }
}

Init()

// pegar o login e senha -> name = "adriel" e "Senha123.!"
function ValidarFormulario(e) {
    e.preventDefault()
    console.log(emailInput.value)
    if (emailInput.value === "adriel@gmail.com" && passwordInput.value === "Senha123.!") {
        alert('Logou')
        console.log(rememberMe.value)
        if (rememberMe.checked) {
            sessionStorage.setItem('loginInfo', JSON.stringify({
                email: emailInput.value,
                password: passwordInput.value
            }))
        }
    } else {
        alert("Usuário ou senha inválido")
    }
}

function ValidarCampo (e) {
    e.preventDefault()
    console.log('veio do ' + e.target.name)
    if (e.target.value !== "") {
        if (e.target.name === "email") {
            isEmailInputEmpty = false
        } else if (e.target.name === "password") {
            isPasswordInputEmpty = false
        }
        if (isEmailInputEmpty === false && isPasswordInputEmpty === false ) {
            button.disabled = false
        }
    } else {
        button.disabled = true
    }
}