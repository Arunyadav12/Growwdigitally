
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;
const intervalTime = 3000; // Change slide every 5 seconds

function nextSlides() {
    counter++;
    if (counter === slider.children.length) {
        counter = 0;
    }
    slide();
}

function slide() {
    slider.style.transform = `translateX(${-counter * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    nextSlides();
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter === -1) {
        counter = slider.children.length - 1;
    }
    slide();
});

// Automatic sliding
setInterval(nextSlides, intervalTime);



let sliderIndex = 0;
const slides = document.querySelectorAll('.slide2');
const totalSlides = 7;
const intervalTimes = 3000; // Change slide every 3 seconds

function nextSlide() {
    slides[sliderIndex].classList.remove('active');
    sliderIndex = (sliderIndex + 1) % totalSlides;
    slides[sliderIndex].classList.add('active');
    updateSlider();
}

function updateSlider() {
    document.querySelector('.slider1').style.transform = `translateX(-${sliderIndex * 34}%)`;
}

// Set interval for auto sliding
setInterval(nextSlide, intervalTimes);


const accordionHeaders = document.querySelectorAll('.accordion-item-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionBody = accordionItem.querySelector('.accordion-item-body');
    const icon = header.querySelector('i');

    if (accordionBody.classList.contains('show')) {
      accordionBody.classList.remove('show');
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    } else {
      accordionBody.classList.add('show');
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
  });
});