let sectionSteps = document.querySelector(".steps");


window.addEventListener('load', animationOnScroll );

function animationOnScroll () {
  let positionSectionSteps = setInterval(function(){
       infoBlock.innerHTML = "widthBody: " + body.offsetWidth + "<br>" + "windowInnerWidth: " + window.innerWidth + "<br>" + "windowPageY: " + window.pageYOffset;
       
       if (sectionSteps.getBoundingClientRect().top <= (document.documentElement.clientHeight / 2) ) {
          

       };
    }, 100);

    
    
}

//console.log(document.documentElement.clientHeight);