document.addEventListener("DOMContentLoaded", function() {
  const sliderLine = document.querySelector('.slider-line');
  const prevBtn = document.querySelector('.slider__btn-prev');
  const nextBtn = document.querySelector('.slider__btn-next');
  const photoWidth = document.querySelector('.photo').offsetWidth + 5; // Width + margin-right

  let slideIndex = 0;

  function prevSlide() {
    slideIndex = Math.max(slideIndex - 1, 0);
    updateSlidePosition();
  }

  function nextSlide() {
    slideIndex = Math.min(slideIndex + 1, sliderLine.childElementCount - 4);
    updateSlidePosition();
  }

  function updateSlidePosition() {
    const offset = -slideIndex * photoWidth;
    sliderLine.style.transform = `translateX(${offset}px)`;
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
});





