// Relacionamento entre os IDs
const form = document.getElementById("form");
const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");

// Fluxo principal
form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
})
// Evento para tirar o foco de cada input
name.addEventListener("blur", () => {
    checkInputName();
})
lastName.addEventListener("blur", () => {
    checkInputLastName();
})
email.addEventListener("blur", () => {
    checkInputEmail();
})
password.addEventListener("blur", () => {
    checkInputPassword();
})
passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})
// Função de validação
function checkInputName() {
    const nameValue = name.value;
    if(nameValue === ""){
        errorInput(name, "Este campo é obrigatório!")
    } else {
        const formItem = name.parentElement;
        formItem.className = "form-content";
    }
}
function checkInputLastName() {
    const lastNameValue = lastName.value;  
    if(lastNameValue === ""){
        errorInput(lastName, "Este campo é obrigatório!")
    } else {
        const formItem = lastName.parentElement;
        formItem.className = "form-content";
}
}
function checkInputEmail() {
    const emailValue = email.value;
    if(emailValue === ""){
        errorInput(email, "Este campo é obrigatório!")
    } else{
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}
function checkInputPassword() {
    const passwordValue = password.value;
    if(passwordValue === ""){
        errorInput(password, "Este campo é obrigatório!")
    } else if(passwordValue.length < 8){
        errorInput(password, "O mínimo é oito (8) caracteres!")
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content";
    }
}
function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    if(passwordConfirmationValue === ""){
        errorInput(passwordConfirmation, "Este campo é obrigatório!")
    } else if(passwordConfirmationValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas não conferem!")
    } else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content";
    }
}
// Função para verificação antes do envio de formulário
function checkForm(){
    checkInputName();
    checkInputLastName();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")
    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content";
    });
    if(isValid){
        alert("Pronto, cadastro feito com sucesso! 😉")
    } else{
        alert("Ops, algo deu errado! 😕")
    }
}
// Função para exibir a mensagem de erro
function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")
    textMessage.innerText = message;
    formItem.className = "form-content error";
}