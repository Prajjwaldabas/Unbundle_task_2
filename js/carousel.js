document.addEventListener("DOMContentLoaded", function () {
  

    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    let currentIndex = 0;
    const numImages = carousel.childElementCount;
    
    const imageWidth = 40; 
    
    function updateCarousel() {
        const offset = currentIndex * -imageWidth;
        carousel.style.transform = `translateX(${offset}%)`;
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + numImages) % (numImages-2);
        updateCarousel();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % (numImages-2);
        updateCarousel();
        
  
        if (currentIndex === 0) {
            setTimeout(() => {
                updateCarousel();
            }, 500); 
        }
    }
    
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    
    
    
});




