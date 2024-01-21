document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class "slides"
    var slideContainers = document.querySelectorAll(".slides");
  
    // Iterate through each slide container
    slideContainers.forEach(function (container) {
      // Get all images within the slide container
      var images = container.querySelectorAll(".img");
  
      // Set initial styles for images
      images.forEach(function (image, index) {
        // ... (rest of your styles remain unchanged)
      });
  
      // Function to fade in the next image
      function fadeInNextImage() {
        var visibleIndex = Array.from(images).findIndex(function (image) {
          return image.style.opacity == 1;
        });
  
        var nextIndex = (visibleIndex + 1) % images.length;
  
        images[visibleIndex].style.opacity = 0;
        images[nextIndex].style.opacity = 1;
      }
  
      // Blink the first image and then fade in the next image every 3 seconds
      setTimeout(function () {
        images[0].style.opacity = 1; // Show the first image initially
        setInterval(fadeInNextImage, 3000);
      }, 500); // Delay the start to give a blink effect
    });
  });
  