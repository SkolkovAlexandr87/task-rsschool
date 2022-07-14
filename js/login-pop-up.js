

let buttonHeaderLogin = document.querySelector('.button-header-login');
let mainPopUp = document.querySelector('.main-pop-up');
let relativeBlockPopUp = document.querySelector(".relative-block-pop-up");
let mainHeader = document.querySelector(".main-header");
let initialWidthDocument; 
let initialBodyWidth = 1440; 
let clientWidthBody;

let scanningWidthBody = setInterval(function() {
    initialWidthDocument = document.documentElement.offsetWidth;  
    offsetWidthBody = body.offsetWidth;
}, 100);

console.log("bodyWidth: " + body.clientWidth);

buttonHeaderLogin.addEventListener('click', clickButtonLogin );

mainPopUp.addEventListener('click', closePopUp);

function clickButtonLogin () {

    mainPopUp.style.visibility = "visible";
    
    document.body.style.overflow = "hidden";

    if (document.documentElement.offsetWidth <= initialBodyWidth) {
      
      body.style.marginRight = (body.offsetWidth - offsetWidthBody) + "px";
     
    }else{

        body.style.right = (document.documentElement.offsetWidth - initialWidthDocument) / 2 + "px";
        
    }

    mainPopUp.style.opacity = 1;

    relativeBlockPopUp.style.opacity = 1;
    relativeBlockPopUp.style.top = "100px";
}

function closePopUp() {
    relativeBlockPopUp.style.top = "0px";
    relativeBlockPopUp.style.opacity = 0;

    setTimeout(function() {
        body.style.right = "0px";
        body.style.marginRight = "auto";

        mainPopUp.style.opacity = 0;
    
        mainPopUp.style.visibility = "hidden";
    
        document.body.style.overflow = "";

    },300);
    
}