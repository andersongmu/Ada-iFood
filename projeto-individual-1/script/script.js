document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuOverlay = document.getElementById('menu-overlay');

    menuOverlay.style.display = 'none';

    menuIcon.addEventListener('click', function () {
        if (menuOverlay.style.display === 'none') {
            menuOverlay.style.display = 'flex';
        } else {
            menuOverlay.style.display = 'none';
        }
    });

    menuOverlay.addEventListener('click', function (event) {
        if (event.target === menuOverlay) {
            menuOverlay.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menuSearchIcon = document.getElementById('menu-search-icon');
    const searchInput = document.getElementById('search-input');

    menuSearchIcon.addEventListener('click', function () {
        searchInput.style.display = 'block';
        menuSearchIcon.style.display = 'none';
        searchInput.focus();
    });

    document.addEventListener('click', function (event) {
        if (event.target !== searchInput && event.target !== menuSearchIcon) {
            searchInput.style.display = 'none';
            menuSearchIcon.style.display = 'block';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;
    let startX, currentX, touchStartX;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        updateCarousel();
    }

    function updateCarousel() {
        const translateValue = -currentIndex * 100 + '%';
        carousel.style.transform = `translateX(${translateValue})`;
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        carousel.style.transition = 'none';
    });

    carousel.addEventListener('touchmove', (e) => {
        currentX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', () => {
        if (touchStartX - currentX > 50) {
            nextSlide();
        } else if (currentX - touchStartX > 50) {
            prevSlide();
        }
        carousel.style.transition = 'transform 0.5s ease-in-out';
        updateCarousel();
    });

    carousel.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        carousel.style.transition = 'none';
    });

    carousel.addEventListener('mousemove', (e) => {
        currentX = e.clientX;
    });

    carousel.addEventListener('mouseup', () => {
        if (currentX - startX > 50) {
            prevSlide();
        } else if (startX - currentX > 50) {
            nextSlide();
        }
        carousel.style.transition = 'transform 0.5s ease-in-out';
        updateCarousel();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const sugestaoForm = document.getElementById('sugestao-form');

    sugestaoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        sugestaoForm.reset();
    });
});