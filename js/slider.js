const slides = document.querySelector('.slides');
        const dots = document.querySelectorAll('.dot');

        let currentIndex = 0;

        function updateSlider() {
            const offset = currentIndex * -33.33; // 33.33% for each slide
            slides.style.transform = `translateX(${offset}%)`;

            // Update active dot
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % 3;
            updateSlider();
        }

        // Automatically slide on page load
        setInterval(nextSlide, 3000);

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });