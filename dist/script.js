// 
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}
// 
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});

// carousel

const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const images = document.querySelectorAll("#slider > div");

let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        console.log(`i: ${i}, index: ${index}`);
        image.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function prevImage() {
    currentIndex = (currentIndex + images.length - 1) % images.length ;
    showImage(currentIndex);
}



function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    console.log("Next clicked, currentIndex:", currentIndex);
    showImage(currentIndex);
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

showImage(currentIndex);


// testi carousel 

document.addEventListener("DOMContentLoaded", function () {
    const wrapperTestimonial = document.getElementById("wrapperTestimonial");
    const prevButton = document.getElementById("prevBtnTesti");
    const nextButton = document.getElementById("nextBtnTesti");
  
    const carouselItems = wrapperTestimonial.querySelectorAll(".rounded-md.shadow-md");
    const itemsPerSlide = 2;
    let currentIndex = 0;
  
    function showItems() {
      for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.display = "none";
      }
  
      for (let i = currentIndex; i < currentIndex + itemsPerSlide; i++) {
        if (carouselItems[i]) {
          carouselItems[i].style.display = "block";
        }
      }
    }
  
    function prevSlide() {
      currentIndex -= itemsPerSlide;
      if (currentIndex < 0) {
        currentIndex = carouselItems.length - itemsPerSlide; // Wrap around to the last slide
      }
      showItems();
    }
  
    function nextSlide() {
      currentIndex += itemsPerSlide;
      if (currentIndex >= carouselItems.length) {
        currentIndex = 0; // Wrap back to the first slide
      }
      showItems();
    }
  
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  
    // Show the initial items
    showItems();
  });
  
  
  
  
