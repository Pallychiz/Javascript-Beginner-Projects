const btn = document.querySelector('.btn');
const copyBtn = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");
const input = document.getElementById("input");

let password = "";

btn.addEventListener('click', () => {
    createPassword()
})

copyBtn.addEventListener('click', () => {
    if (password) {
        copyPassword();

         setTimeout(() => {
           alertContainer.classList.add("active");
         }, 2000);
    }
})

function createPassword() {
    password = '';
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    const passwordLength = 16;

    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }

    input.value = password;
}

function copyPassword() {
    input.select();
    input.setSelectionRange(0, 9999); //This is for mobile selection
    navigator.clipboard.writeText(input.value)
    alertContainer.innerHTML = `${password} Copied!`
    alertContainer.classList.remove('active')
}