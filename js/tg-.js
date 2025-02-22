const token = '7416370472:AAFE8gVuVQOzeEmORFoilKnK94RndxfNhVY';  
const chatId = '-1002490958791';
const feedbackSent = document.getElementById('feedback-sent'); // Статус надсилання

// URL для запиту до API для отримання кількості учасників
const url = `https://api.telegram.org/bot${token}/getChatMembersCount?chat_id=${chatId}`;
const sendMessageUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;


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
                feedbackSent.textContent = 'Надіслано!';
                feedbackSent.classList.remove('hidden');
            } else {
                console.error("Помилка надсилання:", data);
                feedbackSent.textContent = 'Не вдалося надіслати.';
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
