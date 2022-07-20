let widthMediaStories = 390;
let arrayImagesStories = document.querySelector('.block-stories').getElementsByTagName('img');
let numImageStories,
    widthWindowStories;
    
if(window.innerWidth <= widthMediaStories) {
    insertSmallPicturesInSectionStories();
}else {
    insertLargePicturesInSectionStories();
}


function insertSmallPicturesInSectionStories() {
    numImageStories = 1;
    for(let elem of arrayImagesStories) {
        elem.src = `images/storiesImage-${numImageStories}-mini.jpg`;
        numImageStories++;
    }
}

function insertLargePicturesInSectionStories() {
    numImageStories = 1;
    for(let elem of arrayImagesStories) {
        elem.src = `images/storiesImage-${numImageStories}.jpg`;
        numImageStories++;
    }
}



let changeImgStories = setInterval(function() {
   if(widthWindowStories !== window.innerWidth) {
      widthWindowStories = window.innerWidth;
      
      if(window.innerWidth <= widthMediaStories) {
        insertSmallPicturesInSectionStories();
      }
      
      if(window.innerWidth >= widthMediaStories) {
        insertLargePicturesInSectionStories();
      }
   }
    
}, 300);