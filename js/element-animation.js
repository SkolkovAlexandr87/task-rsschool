let formInBeginning = document.querySelector(".form-in-beginning");
let inputFormInBeginning = document.querySelector(".input");
let textLogo = document.querySelector(".textLogo");
let listInHeader = document.querySelector(".list-in-header").children;
let count = 0;

//console.log(listInHeader.length);

window.addEventListener("load",elementAnimation);

function elementAnimation() {
  setTimeout( function() {
    formInBeginning.style.opacity = 1;
    formInBeginning.style.marginLeft = "8.5%";

    inputFormInBeginning.style.visibility = "visible";
    inputFormInBeginning.style.opacity = 1;
    
    setTimeout(function() {

      // console.log("load");

      let intervalOccurrenceOflistItems = setInterval(() => {
         if (count == listInHeader.length - 1 ) {
            setTimeout(function(){
              textLogo.classList.add("animation");
              
            },800);
            clearInterval(intervalOccurrenceOflistItems);
         }

         listInHeader[count].style.opacity = 1;
         listInHeader[count].style.transform = "scale( 1 )";
         count++;

       }, 500);

    }, 1800);
}, 500);
}


