document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here

    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    let currentIndex = 0;
    const numImages = carousel.childElementCount;
    
    const imageWidth = 40; // Assuming each image has a width of 100%
    
    function updateCarousel() {
        const offset = currentIndex * -imageWidth;
        carousel.style.transform = `translateX(${offset}%)`;
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + numImages) % numImages;
        updateCarousel();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % numImages;
        updateCarousel();
        
        // Check if we've reached the last image and loop back to the first image
        if (currentIndex === 0) {
            setTimeout(() => {
                updateCarousel();
            }, 500); // Add a delay for a smoother transition
        }
    }
    
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    
    
    
});




