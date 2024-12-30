const mobileImg = document.getElementById("mobile-imag");
const register = document.querySelector(".register");
const errorMsg = document.getElementById("error-msg");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submit");
const successMsg = document.querySelector(".success-message");
const DismissBtn = document.getElementById("DismissBtn");

function validateEmail() {
    const emailValue = document.getElementById("email").value;
    const emailBgC = document.getElementById("email");
    if (emailValue.length == 0) {
        errorMsg.style.display = 'block'
        emailBgC.style.backgroundColor = '#fff3e0';
        return false
    }
    if (!emailValue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
         errorMsg.style.display = 'block'
         emailBgC.style.backgroundColor = '#fff3e0';
         return false
    }
       errorMsg.style.display = 'none';
       return true;
}

 function validateForm() {
    if (!validateEmail()) {
       errorMsg.style.display = 'block'
    }
    else{
       mobileImg.style.display = 'none'
        register.style.display = 'none'
    successMsg.style.display = 'block'
    }
 }

 function mobileDisplayImg(){
let ismobile = window.innerWidth  <= 767;
if (ismobile) {
    mobileImg.style.display = 'block'
}else{
    mobileImg.style.display = 'none'
}
 }
 function dissMisMsg(){
    if ( successMsg.style.display = 'block') {
        register.style.display = 'flex'
         successMsg.style.display = 'none'
        
    }
    else{
        register.style.display = 'block'
         successMsg.style.display = 'none' 
    }
 }

 submitBtn.addEventListener("click", validateForm);
 DismissBtn.addEventListener("click", dissMisMsg);
 