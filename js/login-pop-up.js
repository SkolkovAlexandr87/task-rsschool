

let buttonLoginInHeader = document.querySelector('.button-header-login');
let mainPopUp = document.querySelector('.main-pop-up');
let relativeBlockPopUp = document.querySelector('.relative-block-pop-up');
let relativeSignUpPopUp = document.querySelector('.relative-sign-up-pop-up');
let mainHeader = document.querySelector(".main-header");
let linkSignUp = document.querySelector('.link-sign-up');
let linkLogIn = document.querySelector('.link-log-in');
let initialWidthDocument; 
let initialBodyWidth = 1440; 
let clientWidthBody;

let scanningWidthBody = setInterval(function() {
    initialWidthDocument = document.documentElement.offsetWidth;  
    offsetWidthBody = body.offsetWidth;
}, 100);

buttonLoginInHeader.addEventListener('click', clickButtonLogin );

mainPopUp.addEventListener('click', closePopUp);


function clickButtonLogin () {
  
    mainPopUp.style.visibility = "visible";
    relativeBlockPopUp.style.display = 'block';
    document.body.style.overflow = "hidden";

    
       if (document.documentElement.offsetWidth <= initialBodyWidth) {
      
          body.style.marginRight = (body.offsetWidth - offsetWidthBody) + "px";
     
       }else {

          body.style.right = (document.documentElement.offsetWidth - initialWidthDocument) / 2 + "px";
        
       }
    
    mainPopUp.style.opacity = 1;
   
    relativeBlockPopUp.style.opacity = 1;
    relativeBlockPopUp.style.top = "20px";
 
  
}

function closePopUp(event) {

    if(event.target.className == 'main-pop-up') {
      relativeBlockPopUp.style.top = "0px";
      relativeBlockPopUp.style.opacity = 0;
      
      setTimeout(function() {
    
           body.style.right = "0px";
           body.style.marginRight = "auto";

           mainPopUp.style.opacity = 0;

           mainPopUp.style.visibility = "hidden";
    
           document.body.style.overflow = "";

           if(relativeSignUpPopUp) {
            setTimeout(function() {
                relativeSignUpPopUp.style.display = 'none';
            },delay * 2);
            
           };
        
      },delay);

      if(relativeSignUpPopUp) {
        relativeSignUpPopUp.style.top = "0px";
        relativeSignUpPopUp.style.opacity = 0;
      }

    }else {
        return;
    }
    
}

linkSignUp.addEventListener('click', showPopUpRegister);

function showPopUpRegister(event) {
    event.preventDefault();
    relativeBlockPopUp.style.top = "-40px";
    relativeBlockPopUp.style.opacity = 0;
    setTimeout(function() {
        relativeBlockPopUp.style.display = 'none';
        relativeSignUpPopUp.style.display = 'block';

        setTimeout(function () {
            
            relativeSignUpPopUp.style.opacity = '1';
            relativeSignUpPopUp.style.top = '30px';
            
        }, delay);

    }, delay * 2);
    
    
}

linkLogIn.addEventListener('click', function(event) {
    event.preventDefault();
    relativeSignUpPopUp.style.opacity = 0;
    relativeSignUpPopUp.style.top = '-40px';
    
    setTimeout(function() {
        relativeSignUpPopUp.style.display = 'none';
        relativeBlockPopUp.style.display = 'block';
        setInterval(function(){
            relativeBlockPopUp.style.opacity = '1';
            relativeBlockPopUp.style.top = '30px';
        },delay);

    }, delay * 2);
    
});