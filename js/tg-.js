// Ваш токен для бота
//const token = '7643771807:AAFNISXPwKvLSF6VJFwCqjcjhXBA5eALGPc'; // Вставте ваш токен
// ID чату або групи
//const chatId = '-4545119175'; // Вставте ID вашої групи
const feedbackSent = document.getElementById('feedback-sent'); // Статус надсилання

// URL для запиту до API для отримання кількості учасників
const url = `https://api.telegram.org/bot${token}/getChatMembersCount?chat_id=${chatId}`;

// Функція для отримання кількості учасників
function getPeopleCount() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // Вивести кількість учасників
                document.getElementById('peopleCount').textContent = data.result;
            } else {
                document.getElementById('peopleCount').textContent = 'Помилка при отриманні даних';
                console.error('Помилка:', data);
            }
        })
        .catch(error => {
            console.error('Помилка під час отримання кількості людей:', error);
            document.getElementById('peopleCount').textContent = 'Не вдалося отримати дані';
        });
}

// Викликаємо функцію для отримання кількості людей при завантаженні сторінки
window.onload = getPeopleCount;

// Обробник для відправки коментаря через Telegram-бота
const sendBtn = document.querySelector('.sendtg-btn');
const feedbackInput = document.getElementById('feedback');

// Обробник для кнопки "Надіслати"
sendBtn.addEventListener('click', (event) => {
    // Запобігаємо стандартному відправленню форми
    event.preventDefault();

    // Отримуємо текст коментаря або використовуємо placeholder
    const textToSend = feedbackInput.value.trim() || feedbackInput.placeholder;

    // Кодуємо текст для передачі в URL
    const encodedText = encodeURIComponent(textToSend);

    // URL для надсилання повідомлення
    const sendMessageUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodedText}`;

    // Відправка повідомлення через Telegram API
    fetch(sendMessageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.ok) {
                // Очищаємо поле вводу після відправлення
                feedbackInput.value = '';
                feedbackSent.textContent = 'Пророцтво збулось!';
                feedbackSent.classList.remove('hidden');
            } else {
                console.error("Помилка надсилання:", data);
                feedbackSent.textContent = 'Не вдалося надіслати пророцтво.';
                feedbackSent.classList.remove('hidden');
            }
        })
        .catch(error => {
            console.error("Помилка надсилання:", error);
            feedbackSent.textContent = 'Виникла помилка при надсиланні.';
            feedbackSent.classList.remove('hidden');
        });
});

// Очищення повідомлення про статус при кліку на поле вводу
feedbackInput.addEventListener('click', () => {
    feedbackSent.textContent = ''; // Очищаємо повідомлення про статус
});
