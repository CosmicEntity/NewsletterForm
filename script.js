const form =document.querySelector("form");
const formContainer = document.querySelector(".form-container");
const submitBtn =document.querySelector("Button");
const email = document.querySelector("input");
const label = document.querySelector(".error-label");
const successContainer = document.querySelector(".success-container");
const dismissBtn = document.querySelector(".dismiss");
const successMessage = document.getElementById("subscribed-email");

let isValid = false;

function validate(){
    isValid = form.checkValidity();

    if(!isValid){
        email.classList.add("invalid");
        label.hidden = false;
        label.classList.add("error");
    }else{
        email.classList.remove("invalid");
        label.hidden = true;
        label.classList.remove("error");
        formContainer.style.display = "none";
        successContainer.style.display = "flex";
        successMessage.textContent = `${email.value}`;
        successMessage.style.fontWeight = "700"
    }
}


function handleSubmit(e){
    e.preventDefault();
    validate();
}

function restoreForm(){
    form.reset();
    successContainer.style.display = "none";
    formContainer.style.display = "flex";
}





submitBtn.addEventListener("click",handleSubmit);
dismissBtn.addEventListener("click", restoreForm);