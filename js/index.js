const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentSlide = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, index) => dot.classList.toggle('active', index === currentSlide));
}

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateCarousel();
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') nextButton.click();
  if (event.key === 'ArrowLeft') prevButton.click();
});
