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

    // Перехід на інший сайт
    window.location.href = "https://ru.freepik.com/free-photos-vectors/%D1%84%D0%BE%D0%BD-%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%B5";  // Замініть на ваш URL
});



