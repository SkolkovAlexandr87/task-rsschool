let iconBurgerMenu = document.querySelector('.icon-burger-menu');
let blockBurgerMenu = document.querySelector('.block-burger-menu');
let relativeBlockBurgerMenu = document.querySelector('.relative-block-burger-menu');
let delay = 300;

iconBurgerMenu.addEventListener('click',appearanceBurgerMenu);

function appearanceBurgerMenu () {
   
   blockBurgerMenu.style.visibility = "visible";
   relativeBlockBurgerMenu.style.left = "50%";
}

blockBurgerMenu.addEventListener('click', hidingBurgerMenu);

function hidingBurgerMenu (event) {
    
    if(event.target.className == "block-burger-menu" ||  event.target.className == "box-burger-menu" ||  event.target.className == "list-burger-menu") {
         return;
    }
    
    relativeBlockBurgerMenu.style.left = "100%";

    setTimeout(function() {
        blockBurgerMenu.style.visibility = "hidden";
    }, delay);
}