document.addEventListener("DOMContentLoaded", () => {
    const formatsList = document.getElementById("formatsList");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const formats = document.querySelectorAll(".formats-item");
    let visibleCount = 3; // Кількість видимих елементів на великих екранах
    let currentIndex = 0;

    // Функція для оновлення видимості карток
    function updateVisibleItems() {
        formats.forEach((item, index) => {
            // Видимі елементи залежно від currentIndex та visibleCount
            if (index >= currentIndex && index < currentIndex + visibleCount) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    }

    // Функція для оновлення стану кнопок
    function updateCarousel() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= formats.length - visibleCount;
    }

    // Функція для адаптації до розміру екрана
    function handleResize() {
        const screenWidth = window.innerWidth;
        visibleCount = screenWidth <= 768 ? 1 : 3; // Один елемент на мобільних, три — на великих
        currentIndex = Math.min(currentIndex, formats.length - visibleCount); // Коригуємо індекс
        updateVisibleItems();
        updateCarousel();
    }

    // Обробники подій для кнопок
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateVisibleItems();
            updateCarousel();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < formats.length - visibleCount) {
            currentIndex++;
            updateVisibleItems();
            updateCarousel();
        }
    });

    // Слухаємо зміну розміру вікна
    window.addEventListener("resize", handleResize);

    // Початкове відображення
    handleResize();
});
