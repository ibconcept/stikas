  let currentIndex = 0;
  const slides = document.querySelectorAll('.hero-slide');
  
  function showSlide(index) {
      slides.forEach((slide, idx) => {
          slide.style.transform = `translateX(${30 * (idx - index)}%)`;
      });
  }
  
  setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }, 3000); // Slides every 3 seconds

