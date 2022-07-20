let iconBurgerMenu = document.querySelector('.icon-burger-menu');
let blockBurgerMenu = document.querySelector('.block-burger-menu');
let boxBurgerMenu = document.querySelector('.box-burger-menu');
let delay = 300;

iconBurgerMenu.addEventListener('click',appearanceBurgerMenu);

function appearanceBurgerMenu () {
   
   blockBurgerMenu.style.display = "block";

   setTimeout(function() {
      boxBurgerMenu.style.right = "9%";
   }, delay)
   
}

blockBurgerMenu.addEventListener('click', hiddingBurgerMenu);

function hiddingBurgerMenu (event) {
    
    if(event.target.tagName == "A" ||  event.target.className == "icon-close-menu" ) {
       
        boxBurgerMenu.style.right = "-50%";

        setTimeout(function() {
            blockBurgerMenu.style.display = "none";
        }, delay);
        
    }else {
        return;
    }

    
}