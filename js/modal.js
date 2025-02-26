// Отримуємо елементи
const openModalBtn = document.querySelector('.modal-btn-open');
const closeModalBtn = document.querySelector('.modal-btn-close');
const modalBackdrop = document.querySelector('.backdrop');


// Відкриття модального вікна
openModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.remove('is-hidden');
});

// Закриття модального вікна
closeModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.add('is-hidden');
});

document.querySelector('.form-button').addEventListener('click', function (event) {
    // Запобігаємо стандартному відправленню форми
    event.preventDefault();

    // Перехід на інший сайт в новому вікні/вкладці
    window.open("https://www.youtube.com/watch?v=p2O6FOKwDrU", "_blank");
});



