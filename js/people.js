const token = '7416370472:AAFE8gVuVQOzeEmORFoilKnK94RndxfNhVY';  
const chatId = '-1002490958791';


const urlPeople = `https://api.telegram.org/bot${token}/getChatMemberCount?chat_id=${chatId}`;


// https://api.telegram.org/bot7643771807:AAFNISXPwKvLSF6VJFwCqjcjhXBA5eALGPc/getChatMemberCount?chat_id=-4545119175`

function getMemberCount() {
    fetch(urlPeople)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // Вивести кількість учасників
                // console.log(data.result)
                document.getElementById('peopleCount').textContent = data.result;
            } else {
                document.getElementById('peopleCount').textContent = 'Помилка при отриманні даних';
            }
        })
        .catch(error => {
            console.error('Error fetching member count:', error);
            document.getElementById('peopleCount').textContent = 'Не вдалося отримати дані';
        });
}

getMemberCount();



// Обробник для відправки коментаря через Telegram-бота
const feedbackInput = document.getElementById('feedback');
const sendBtn = document.querySelector('.sendtg-btn');
const feedbackSent = document.getElementById('feedback-sent'); // Статус надсилання
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
