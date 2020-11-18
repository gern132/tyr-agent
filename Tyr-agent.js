let btn = document.querySelector(".kontakt");
let sod = document.querySelector(".text-kontakt");

btn.addEventListener('click' , btnclick);

function btnclick() {
    
    sod.classList.toggle('text-hidden')
}
//-----------------------------------

let login = document.querySelector(".login");
let mainlogin = document.querySelector(".main-login");
let esc = document.querySelector('.esc');

esc.addEventListener('click', escClick);
login.addEventListener('click', loginClick);

function loginClick() {
    mainlogin.classList.remove('mainl');
    document.getElementsByTagName("div")[0].style.transition = '0s';
}

function escClick() {
    mainlogin.classList.toggle('mainl');
}


//----------
