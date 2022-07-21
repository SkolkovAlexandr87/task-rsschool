let widthMediaDestinations = 656;
let arrayImagesDestinations = document.querySelector('.block-list-images').getElementsByTagName('img');
let arrIndicators = document.querySelector('.position-indicator').getElementsByTagName('span');
let buttonLeft = document.querySelector('.img-button-left');
let buttonRight = document.querySelector('.img-button-right');
let indexArrIndicators = 1;
let numImageDestinations,
    marginImg = 30,
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


let sectionDestinations = document.querySelector('.destinations');
let blockListImages = document.querySelector('.block-list-images');
let interiorListImages = document.querySelector('.interior-block-list-images');

for(let elem of arrayImagesDestinations) {
    elem.addEventListener('click', changingPositionOfPicture);
}

let positionInteriorBlock = 0;
let generalWidth;
let widthImage;
function changingPositionOfPicture(event) {
    
    let coordCenter = blockListImages.getBoundingClientRect().left + blockListImages.offsetWidth / 2;
    widthImage = event.target.width;
    generalWidth = arrayImagesDestinations.length * (event.target.width + marginImg * 2);
    
    if (event.clientX  >  coordCenter + widthImage / 2 ) {

       positionInteriorBlock -= (generalWidth / 3);

       interiorListImages.style.left = positionInteriorBlock + 'px';

       indexUp(indexArrIndicators);

       console.log(indexArrIndicators);
    }
    
    if (event.clientX < coordCenter - widthImage / 2) {

       positionInteriorBlock += (generalWidth / 3);

       interiorListImages.style.left = positionInteriorBlock + 'px';

       indexDown();

    }

    return;

}


console.log(arrIndicators[1]);

function indexUp() {
    indexArrIndicators++;
    
    for(let elem of arrIndicators) {
       elem.style.backgroundColor = 'rgba(242, 120, 92, 0.5)';
    }

    arrIndicators[indexArrIndicators].style.backgroundColor = 'rgba(242, 120, 92, 1)';

}

function indexDown() {
    indexArrIndicators--;

    for(let elem of arrIndicators) {
        elem.style.backgroundColor = 'rgba(242, 120, 92, 0.5)';
     }
 
     arrIndicators[indexArrIndicators].style.backgroundColor = 'rgba(242, 120, 92, 1)';

}


buttonLeft.addEventListener('click', shiftLeft);
buttonRight.addEventListener('click', shiftRight);

function shiftLeft() {
    widthImage = arrayImagesDestinations[0].width;
    generalWidth = arrayImagesDestinations.length * (widthImage + marginImg * 2);
    
    if(indexArrIndicators < arrayImagesDestinations.length - 1) {
    positionInteriorBlock -= (generalWidth / 3);

    interiorListImages.style.left = positionInteriorBlock + 'px';
   
    indexUp();
    }
}

function shiftRight() {
    widthImage = arrayImagesDestinations[0].width;
    generalWidth = arrayImagesDestinations.length * (widthImage + marginImg * 2);

    if(indexArrIndicators > 0) {
    positionInteriorBlock += (generalWidth / 3);

    interiorListImages.style.left = positionInteriorBlock + 'px';

    indexDown();
    }
}