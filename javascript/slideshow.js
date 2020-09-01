var slideIndex = 0;
var slides;
console.log("before");
firstSlide();

function firstSlide(){
  window.onload = (event) => {
    console.log("loaded");
    slides = document.getElementsByClassName("myPhotos");
    showSlide(0);
    
    console.log("after " + slides.length);
  }
}


function changeSlide(num){
  slideIndex =  slideIndex + num;
  console.log("change " + slideIndex);
  showSlide(slideIndex);
}

function showSlide(index){
  console.log("show " + slides.length);
  if(index > slides.length - 1){slideIndex = 0}
  if(index < 0){slideIndex = slides.length - 1}
  for(var i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function read(){
  var read = document.getElementById("read");
  var moreText = document.getElementById("moreText")
  if(moreText.style.display === "block"){
    moreText.style.display = "none";
    read.innerHTML = "Read more..."
  }
  else{
    moreText.style.display = "block"
    read.innerHTML = "Read Less";
  }
}


//FOR MOBILE: OPEN HAMBURGER MENU
function openMobile(){
  var mobileNav = document.getElementById("mobileNav");
  if(mobileNav.style.display != "block"){
    mobileNav.style.display = "block";
  }
}

//FOR MOBILE: CLOSE HAMBURGER MENU
function closeMobile(){
  var mobileNav = document.getElementById("mobileNav");
  if(mobileNav.style.display == "block"){
    mobileNav.style.display = "none";
  }
}


//FOR MOBILE: DROPDOWN MENU
function mobiledrop(){
  var mobileCat = document.getElementById("mobileCat");
  if(mobileCat.style.display != "block"){
    mobileCat.style.display = "block";
  }
  else{
    mobileCat.style.display = "none";
  }
}