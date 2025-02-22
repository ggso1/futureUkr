const data = [
     {
    "id": "1",
    "code": "111",
    "name": "Триєдність стихій",
    "description": "Магічна мішанка, що поєднує енергії вогню, води й повітря.",
    "ful_description": "Цей напій об'єднує силу трьох основних стихій: палаючого вогню, прохолодної води й невловимого повітря. Його смак насичений, а післясмак залишає відчуття спокою й рівноваги. Ідеальний для тих, хто прагне гармонії у світі й у собі.",
    "price": "25 ☀️",
    "img": "111.jfif"
  },
  {
    "id": "2",
    "code": "112",
    "name": "Шепіт часу",
    "description": "Мішанка із нотками вічності, що відкриває двері в магічний вимір.",
    "ful_description": "Ця мішанка створена для тих, хто прагне відчути подих минулого й майбутнього. Солодка, із легким присмаком терпкості, вона викликає спогади про найтепліші моменти та надихає на нові звершення. Її магія розкривається поступово, огортаючи теплом і ясністю думок.",
    "price": "30 ☀️",
    "img": "112.jfif"
  },
  {
    "id": "3",
    "code": "113",
    "name": "Тінь зоряного неба",
    "description": "Темна і загадкова мішанка із нотками місячного сяйва.",
    "ful_description": "Цей напій занурює в атмосферу зоряного неба, де кожна зірка має свою історію. Його глибокий, майже оксамитовий смак із легкими фруктовими нотками нагадує нічний вітер. Він ідеально підходить для вечорів роздумів або мрій про незвідані світи.",
    "price": "35 ☀️",
    "img": "113.jfif"
  },
  {
    "id": "4",
    "code": "121",
    "name": "Крила фенікса",
    "description": "Мішанка із теплом і пристрастю, що пробуджує нові сили.",
    "ful_description": "Як фенікс відроджується з попелу, ця мішанка надихає на нові починання. Її смак глибокий і зігріваючий, а післясмак залишає відчуття потужної енергії. Ідеальний вибір для тих, хто хоче знайти в собі силу змінити світ або почати нову сторінку життя.",
    "price": "40 ☀️",
    "img": "121.jfif"
  },
  {
    "id": "5",
    "code": "122",
    "name": "Вічна ніч",
    "description": "Загадкова мішанка із холодними нотками ночі й глибин океану.",
    "ful_description": "Ця мішанка пробуджує найтемніші куточки магії, де сховані таємниці світу. Її смак освіжає й залишає післясмак легкого холоду, ніби ковток нічного повітря на березі океану. Ідеальна для тих, хто прагне досліджувати незвідане й загадкове.",
    "price": "35 ☀️",
    "img": "122.jfif"
  },
  {
    "id": "6",
    "code": "123",
    "name": "Поклик хаосу",
    "description": "Сильна мішанка із присмаком свободи та сили.",
    "ful_description": "Мішанка, що пробуджує внутрішню енергію, хаотичну й непередбачувану. Її смак насичений і багатогранний, нагадує бурю, що раптово налетіла. Вона ідеально підходить для сміливців, які не бояться прийняти виклик долі.",
    "price": "45 ☀️",
    "img": "123.jfif"
  },
  {
    "id": "7",
    "code": "131",
    "name": "Сяйво місяця",
    "description": "Легка мішанка із нотками квітів і магії нічного світла.",
    "ful_description": "Ця мішанка створена для тих, хто цінує спокій і красу ночі. Її аромат нагадує весняний сад під місячним світлом, а смак ніжний і освіжаючий. Ідеально підходить для медитативних моментів або тихих вечорів із книгою.",
    "price": "30 ☀️",
    "img": "131.jfif"
  },
  {
    "id": "8",
    "code": "132",
    "name": "Подих вічності",
    "description": "М’яка мішанка, що залишає післясмак спокою й гармонії.",
    "ful_description": "Мішанка, що пробуджує відчуття зв’язку з вічністю. Її смак ніжний, із легкими фруктовими нотками, залишає відчуття гармонії та спокою. Ідеальна для тих, хто шукає магічну рівновагу в хаосі світу.",
    "price": "35 ☀️",
    "img": "132.jfif"
  },
  {
    "id": "9",
    "code": "133",
    "name": "Полум’я зірок",
    "description": "Мішанка із теплом і силою, наче яскраві зорі на нічному небі.",
    "ful_description": "Ця мішанка наповнена енергією далеких зірок. Її смак насичений і пряний, залишає відчуття внутрішнього тепла й піднесення. Мішанка чудово підходить для вечорів у компанії чи особливих подій, що надихають.",
    "price": "40 ☀️",
    "img": "133.jfif"
  },
  {
    "id": "10",
    "code": "211",
    "name": "Морське сяйво",
    "description": "Відтінки морської глибини і магії океану.",
    "ful_description": "Мішанка, що втілює в собі силу океану. Ніжна, але з глибоким післясмаком морської води, ця мішанка нагадає про безмежність і магічну енергію підводного світу.",
    "price": "40 ☀️",
    "img": "211.jfif"
  },
  {
    "id": "11",
    "code": "212",
    "name": "Скрижалі часу",
    "description": "Мішанка із магічним присмаком древніх міст і великих таємниць.",
    "ful_description": "Скрижалі часу поєднують смак історії, мудрості і потаємних знань. Вона пізнавана, але також має своєрідну глибину, що переносить у часи забутих цивілізацій.",
    "price": "45 ☀️",
    "img": "212.jfif"
  },
  {
    "id": "12",
    "code": "213",
    "name": "Магія світанку",
    "description": "Ніжна мішанка із нотами ранкової свіжості й чистоти.",
    "ful_description": "Ця мішанка надає відчуття легкості, що настає з першими променями сонця. Свіжа, легка, з трохи цитрусовими нотками, вона пробуджує всі почуття до нового дня.",
    "price": "30 ☀️",
    "img": "213.jfif"
  },
  {
    "id": "13",
    "code": "221",
    "name": "Далекі зорі",
    "description": "Мішанка, що приносить відчуття магії небесних просторах.",
    "ful_description": "Неповторний смак, що нагадує про далекі зірки й безкраї космоси. Після кожного ковтка.",
     "price": "60 ☀️",
    "img": "332.jfif"
  },
  {
    "id": "27",
    "code": "333",
    "name": "Магічна вершина",
    "description": "Найвищий ступінь досконалості в магії.",
    "ful_description": "Цей напій символізує досконалість і майстерність. Його смак насичений, багатий і незабутній, ідеальний для справжніх поціновувачів магії.",
    "price": "60 ☀️",
    "img": "333.jfif"
  }
]


// Ініціалізація значення лічильника при завантаженні сторінки
window.onload = function () {
  if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
  }
  updateCounterDisplay();
  setInterval(addSonechka, 20000); // Додаємо 5 сонечок кожні 20 секунд
};

// Функція підтвердження введеного імені
function confirmName() {
  const username = document.getElementById('username').value.trim();
  if (username) {
    alert(`Вітаємо, ${username}!`);
    addSonechka(); // Додати сонечка після підтвердження імені
  } else {
    alert("Будь ласка, введіть ім'я!");
  }
}

// Функція для додавання 5 сонечок
function addSonechka() {
  let currentValue = parseInt(localStorage.getItem('counter')) || 0;
  currentValue += 5;
  localStorage.setItem('counter', currentValue);
  updateCounterDisplay();
}

// Оновлення відображення лічильника на сторінці
function updateCounterDisplay() {
  document.getElementById("counter").innerText = localStorage.getItem('counter');
}

// Основна функція для змішування коктейлю вручну
function mix() {
  const input1 = document.getElementById("zillia1").value;
  const input2 = document.getElementById("zillia2").value;
  const input3 = document.getElementById("zillia3").value;
  const code = input1 + input2 + input3;

  if (canAffordCocktail(code)) {
    animateImages(code);
    deductSonechka(code); // Віднімаємо сонечка після успішного замовлення
  } else {
    alert("Недостатньо ☀️ для замовлення цієї мішанки!");
  }
}

// Функція для зміни значення у полі введення
function changeValue(id, delta) {
  const input = document.getElementById(id);
  let currentValue = parseInt(input.value) || 0; // Отримуємо поточне значення
  currentValue += delta; // Змінюємо значення на +1 або -1

  if (currentValue < 1) {
    currentValue = 1;
  } else if (currentValue > 3) {
    currentValue = 3;
  }

  input.value = currentValue; // Оновлюємо значення в полі введення
}

// Функція для валідації введеного значення
function validateInput(id) {
  const input = document.getElementById(id);
  const value = input.value.trim();

  if (!['1', '2', '3'].includes(value)) {
    input.value = '';
  }
}

// Функція для випадкового змішування коктейлю
function mixRandom() {
  const digits = ['1', '2', '3'];
  const input1 = digits[Math.floor(Math.random() * digits.length)];
  const input2 = digits[Math.floor(Math.random() * digits.length)];
  const input3 = digits[Math.floor(Math.random() * digits.length)];

  document.getElementById("zillia1").value = input1;
  document.getElementById("zillia2").value = input2;
  document.getElementById("zillia3").value = input3;

  const code = input1 + input2 + input3;

  if (canAffordCocktail(code)) {
    animateImages(code);
    deductSonechka(code);
  } else {
    alert("Недостатньо ☀️ для замовлення цієї мішанки!");
  }
}

// Функція для перевірки достатньої кількості сонечок
function canAffordCocktail(code) {
  const cocktail = data.find(item => item.code === code);
  if (cocktail) {
    const price = parseInt(cocktail.price.split(' ')[0]) || 0;
    const currentValue = parseInt(localStorage.getItem('counter')) || 0;
    return currentValue >= price;
  }
  return false;
}

// Функція для віднімання сонечок після замовлення коктейлю
function deductSonechka(code) {
  const cocktail = data.find(item => item.code === code);
  if (cocktail) {
    const price = parseInt(cocktail.price.split(' ')[0]) || 0;
    let currentValue = parseInt(localStorage.getItem('counter')) || 0;

    currentValue -= price; // Віднімаємо ціну від поточного балансу
    localStorage.setItem('counter', currentValue); // Оновлюємо баланс у localStorage
    updateCounterDisplay(); // Оновлюємо відображення балансу
  }
}

// Функція для анімації зміни зображень
function animateImages(targetCode) {
  const imageElement = document.getElementById("display-image");
  let currentIndex = 0;
  let speed = 100; // Початкова швидкість
  let slowdownStart = 15; // Кількість ітерацій до сповільнення

  const frames = 27;
  const images = [];
  const digits = ['1', '2', '3'];

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        images.push(`img/${digits[i]}${digits[j]}${digits[k]}.jfif`);
      }
    }
  }

  const targetIndex = images.indexOf(`img/${targetCode}.jfif`);

  function updateImage() {
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % frames;

    if (slowdownStart > 0) {
      slowdownStart--;
      speed += 10; // Сповільнення
    } else if (currentIndex === targetIndex) {
      choosecoctail(targetCode);
      return;
    }
    setTimeout(updateImage, speed);
  }
  updateImage();
}

// Функція для вибору коктейлю та оновлення інформації на сторінці
function choosecoctail(code) {
  document.getElementById("name").innerText = "Мішанка";
  document.getElementById("description").innerText = "Опис";
  document.getElementById("full_description").innerText = "Детальний Опис";
  document.getElementById("price").innerText = "Ціна";

  const cocktail = data.find(item => item.code === code);
  if (cocktail) {
    document.getElementById("name").innerText = cocktail.name;
    document.getElementById("description").innerText = cocktail.description;
    document.getElementById("full_description").innerText = cocktail.ful_description;
    document.getElementById("price").innerText = cocktail.price;

    const imageElement = document.getElementById("display-image");
    imageElement.src = `img/${cocktail.img}`;
  }
}
