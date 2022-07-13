

let buttonHeaderLogin = document.querySelector('.button-header-login');
let mainPopUp = document.querySelector('.main-pop-up');
let relativeBlockPopUp = document.querySelector(".relative-block-pop-up");

let initialBodyPositionLeft = body.getBoundingClientRect().left;
let finiteBodyPositionLeft;

console.log(initialBodyPositionLeft);

buttonHeaderLogin.addEventListener('click', clickButtonLogin );

mainPopUp.addEventListener('click', closePopUp);

function clickButtonLogin () {

    mainPopUp.style.visibility = "visible";
    
    document.body.style.overflow = "hidden";
   
    console.log(document.documentElement.clientWidth);

    finiteBodyPositionLeft = (initialBodyPositionLeft - body.getBoundingClientRect().left);

   // console.log(finiteBodyPositionLeft);
    
    body.style.left = finiteBodyPositionLeft + "px";

    console.log(body.getBoundingClientRect().left);
    mainPopUp.style.opacity = 1;

    relativeBlockPopUp.style.opacity = 1;
    relativeBlockPopUp.style.top = "100px";
}

function closePopUp() {
    relativeBlockPopUp.style.top = "0px";
    relativeBlockPopUp.style.opacity = 0;

    setTimeout(function() {
        body.style.left =   "0px";

        mainPopUp.style.opacity = 0;
    
        mainPopUp.style.visibility = "hidden";
    
        document.body.style.overflow = "";

    },300);
    
}