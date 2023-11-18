


let slideshow_count = document.getElementsByClassName("slideshow-container").length;
var slideIndex = Array.from({length:slideshow_count}, (v, i) => 0);

for(let i=0;i<slideshow_count;i++){
  insertDots(i);
  showSlides(0, i);
}

// n is the index of the slide in the Slideshow
// no is the index of the slide show

function plusSlides(n, no) {
  slideIndex[no] += n;
  showSlides(slideIndex[no], no);
}
function currentSlide(n, no) {
  slideIndex[no] = n;
  showSlides(slideIndex[no], no);
}
function showSlides(n, no) {

  var i;
  var x = document.getElementsByClassName("mySlides"+no);
  /*   var dots = document.getElementsByClassName("dot");*/
  var dots = document.getElementsByClassName("dot"+no);
  if (n >= x.length) {slideIndex[no] = 0}
  if (n < 0) {slideIndex[no] = x.length-1}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  x[slideIndex[no]].style.display = "block";
  dots[slideIndex[no]].className += " active-slide";
}

function insertDots(no){
  let dot_container = document.getElementById("dot"+no+"-container");
  let dot_count = document.getElementsByClassName("mySlides"+no).length;

  for(let i=0;i<dot_count;i++){
    let elem = document.createElement("span");
    elem.className = "dot dot"+no;
    elem.setAttribute("onclick","currentSlide("+i+","+no+")");
    dot_container.appendChild(elem);
    console.log(elem);
  }
  console.log(dot_container);
}
