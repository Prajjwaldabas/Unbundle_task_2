const slides = document.querySelector('.slides');
        const dots = document.querySelectorAll('.dot');

        let currentIndex = 0;

        function updateSlider() {
            const offset = currentIndex * -33.33;
            slides.style.transform = `translateX(${offset}%)`;

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % 3;
            updateSlider();
        }

        setInterval(nextSlide, 3000);

      
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });