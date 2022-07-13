let body = document.querySelector('body');
let infoBlock = document.querySelector(".info-block");

setInterval(function() {
   infoBlock.innerHTML = "widthBody: " + body.offsetWidth + "<br>" + "scrollTop:" + document.documentElement.scrollTop;
  
},10)

