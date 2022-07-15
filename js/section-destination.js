let widthMedia = 656;
let arrayImages = document.querySelector('.block-list-images').getElementsByTagName('img');
let startSrc,
    endSrc,
    numImage,
    widthWindow = 0;
    
   
if(window.innerWidth <= widthMedia) {
    insertSmallPictures();
}else {
    insertLargePictures();
}


function insertSmallPictures() {
    numImage = 1;
    for(let elem of arrayImages) {
        elem.src = `images/rectangle-${numImage}-mini.jpg`;
        numImage++;
    }
}

function insertLargePictures() {
    numImage = 1;
    for(let elem of arrayImages) {
        elem.src = `images/rectangle-${numImage}.jpg`;
        numImage++;
    }
}



let change = setInterval(function() {
   if(widthWindow !== window.innerWidth) {
      widthWindow = window.innerWidth;
      
      if(window.innerWidth <= widthMedia) {
        insertSmallPictures();
      }
      
      if(window.innerWidth >= widthMedia) {
        insertLargePictures();
      }
   }
    
}, 300);

