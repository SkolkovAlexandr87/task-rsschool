let widthMediaDestinations = 656;
let arrayImagesDestinations = document.querySelector('.block-list-images').getElementsByTagName('img');
let numImageDestinations,
    widthWindowDestinations;  
   
if(window.innerWidth <= widthMediaDestinations) {
    insertSmallPicturesInSectionDestinations();
}else {
    insertLargePicturesInSectionDestinations();
}


function insertSmallPicturesInSectionDestinations() {
    numImageDestinations = 1;
    for(let elem of arrayImagesDestinations) {
        elem.src = `images/rectangle-${numImageDestinations}-mini.jpg`;
        numImageDestinations++;
    }
}

function insertLargePicturesInSectionDestinations() {
    numImageDestinations = 1;
    for(let elem of arrayImagesDestinations) {
        elem.src = `images/rectangle-${numImageDestinations}.jpg`;
        numImageDestinations++;
    }
}



let changeImgDestination = setInterval(function() {
   if(widthWindowDestinations !== window.innerWidth) {
      widthWindowDestinations = window.innerWidth;
      
      if(window.innerWidth <= widthMediaDestinations) {
        insertSmallPicturesInSectionDestinations();
      }
      
      if(window.innerWidth >= widthMediaDestinations) {
        insertLargePicturesInSectionDestinations();
      }
   }
    
}, 300);

