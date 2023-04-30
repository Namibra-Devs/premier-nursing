window.addEventListener('DOMContentLoaded', () => {

  // Responsive Navbar
  const menu = document.querySelector('.nav-list');
  const menuBelow = document.querySelector('.nav-below');
  const bars = document.querySelector('.bars');
  const open = document.querySelector('.open-btn');
  const close = document.querySelector('.close-btn');
  
  bars.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menuBelow.classList.toggle('hidden');
      open.classList.toggle('hidden');
      close.classList.toggle('hidden');
  
      // close menu when clicking on a link
      const links = document.querySelectorAll('.nav-list a', '.nav-below a');
      links.forEach((link) => {
          link.addEventListener('click', () => {
              menu.classList.add('hidden');
              menuBelow.classList.add('hidden');
              open.classList.remove('hidden');
              close.classList.add('hidden');
          });
      });
  
  
  
  
      // close menu when clicking outside
      window.addEventListener('click', (e) => {
          if (e.target !== menu && e.target !== bars && e.target !== open && e.target !== close) {
              menu.classList.add('hidden');
              menuBelow.classList.add('hidden');
              open.classList.remove('hidden');
              close.classList.add('hidden');
          }
      });

// Carousel

const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
const indicators = document.querySelectorAll('.carousel-indicator');
const btn1 = document.querySelector('.carousel-btn-1');
const btn2 = document.querySelector('.carousel-btn-2');
const btn3 = document.querySelector('.carousel-btn-3');
const btn4 = document.querySelector('.carousel-btn-4');
const btn5 = document.querySelector('.carousel-btn-5');
let currentIndex = 0;

function showCurrentItem() {
  carouselItems.forEach(item => item.classList.remove('hidden'));
  indicators.forEach(indicator => indicator.classList.remove('hidden'));
  carouselItems[currentIndex].classList.add('hidden');
  indicators[currentIndex].classList.add('hidden');
}

function moveToPrevItem() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  showCurrentItem();
}

function moveToNextItem() {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  showCurrentItem();
}

let intervalId = setInterval(moveToNextItem, 2000);

prevBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  moveToPrevItem();
  intervalId = setInterval(moveToNextItem, 2000);
});

nextBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  moveToNextItem();
  intervalId = setInterval(moveToNextItem, 2000);
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    clearInterval(intervalId);
    currentIndex = index;
    showCurrentItem();
    intervalId = setInterval(moveToNextItem, 2000);
  });
});

[btn1, btn2, btn3, btn4, btn5].forEach((btn, index) => {
  btn.addEventListener('click', () => {
    clearInterval(intervalId);
    currentIndex = index;
    console.log("btn clicked");
    showCurrentItem();
    intervalId = setInterval(moveToNextItem, 2000);
  });
});

  });
  
  
  
  
  
  
  
  // Scroll to top button
  // const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
  
  // window.addEventListener('scroll', () => {
  //     if (window.pageYOffset > 100) {
  //         scrollToTopBtn.classList.add('show-scroll-btn');
  //     } else {
  //         scrollToTopBtn.classList.remove('show-scroll-btn');
  //     }
  // });
  
  // scrollToTopBtn.addEventListener('click', () => {
  //     window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth'
      // });
  // });
  
  });