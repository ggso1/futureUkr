const data = [
  {
    "id": "1",
    "code": "11",
    "name": "Інженер з штучного інтелекту",
    "description": "Розробка алгоритмів",
    "ful_description": "Інженери зі штучного інтелекту працюють над створенням нових моделей машинного навчання, оптимізацією роботи нейронних мереж та іншими інноваційними технологіями в галузі ШІ.",
    "img": "111.jfif",
    "price": "$100,000-$180,000"
  },
  {
    "id": "2",
    "code": "12",
    "name": "Аналізатор даних біоінженерії",
    "description": "Генетичний аналіз",
    "ful_description": "Позиція фокусується на ефективному управлінні часом. Завдання: розробка стратегій для покращення робочих процесів і зменшення витрат часу на завдання без втрати якості.",
    "img": "112.jfif",
    "price": "$100,000-$180,000"
  },
  {
    "id": "3",
    "code": "13",
    "name": "Фахівець кібербезпеки",
    "description": "Захист систем",
    "ful_description": "Спеціаліст, який забезпечує безпеку цифрових систем і захищає їх від хакерських атак, вірусів та інших кіберзагроз. Вони розробляють стратегії захисту інформації та створюють інструменти для запобігання втратам даних.",
    "img": "113.jfif",
    "price": "$100,000-$180,000"
  },
  {
    "id": "4",
    "code": "21",
    "name": "Робототехнік",
    "description": "Створення роботів",
    "ful_description": "Інженер, який розробляє роботів та автоматизовані системи для виконання різних завдань, таких як виробничі процеси, обслуговування або навіть медичні операції. Вони працюють з механікою, електронікою та програмуванням.",
    "img": "121.jfif",
    "price": "$100,000-$180,000"
  },
  {
    "id": "5",
    "code": "22",
    "name": "Модератор контенту",
    "description": "Перевірка контенту",
    "ful_description": "Професіонал, який відповідає за перевірку і контроль контенту на онлайн-платформах, щоб він відповідав етичним стандартам та не порушував законодавства. Вони моніторять повідомлення користувачів і видаляють небажаний чи шкідливий контент.",
    "img": "122.jfif",
    "price": "$100,000-$180,000"
  },
  {
    "id": "6",
    "code": "23",
    "name": "Екологічний інженер",
    "description": "Охорона навколишнього середовища",
    "ful_description": " Інженер, який розробляє та впроваджує стратегії для зниження негативного впливу людської діяльності на навколишнє середовище, такі як очищення води, зменшення викидів або сталий розвиток.",
    "img": "123.jfif",
    "price": "$100,000-$180,000"
  },
  {
    "id": "7",
    "code": "31",
    "name": "Дизайнер віртуальних світів",
    "description": "Віртуальні середовища",
    "ful_description": "Креативний професіонал, який створює інтерактивні та візуальні віртуальні світи для розваг, навчання чи бізнесу. Вони використовують технології доповненої та віртуальної реальності, а також 3D-моделювання для створення захопливих середовищ.",
    "img": "131.jfif",
    "price": "$100,000-$180,000"
  },
  {
    "id": "8",
    "code": "32",
    "name": "Відбудовник інфраструктури",
    "description": "Будівництво та реконструкція",
    "ful_description": "Після війни Україна зосередиться на відновленні міст, доріг, мостів, енергетичних об'єктів та житлових будинків. Фахівці з інженерії, будівництва, архітектури та урбаністики будуть затребувані для створення сучасної та стійкої інфраструктури.",
    "img": "132.jfif",
    "price": "$100,000-$180,000"
  },
  {
    "id": "9",
    "code": "33",
    "name": "Агроінженер",
    "description": "Інновації в сільському господарстві",
    "ful_description": "Україна залишається одним із провідних аграрних експортерів у світі. У майбутньому розвиток сільського господарства буде зосереджений на автоматизації, впровадженні точного землеробства, використанні дронів та біотехнологій. Агроінженери будуть займатися розробкою та впровадженням сучасних технологій для підвищення врожайності, збереження екології та ефективного використання ресурсів.",
    "img": "133.jfif",
    "price": "$100,000-$180,000"
  },
];


// Основна функція для змішування коктейлю вручну
function mix() {
  const input1 = document.getElementById("zillia1").value;
  const input2 = document.getElementById("zillia2").value;
  const code = input1 + input2;

  animateImages(code);
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

// Функція для анімації зміни зображень
function animateImages(targetCode) {
  const imageElement = document.getElementById("display-image");
  if (!imageElement) {
    console.error("Element with ID 'display-image' not found");
    return;
  }

  let currentIndex = 0;
  let speed = 100; // Початкова швидкість
  let slowdownStart = 15; // Кількість ітерацій до сповільнення

  const digits = ['1', '2', '3'];
  const images = digits.flatMap(d1 => digits.map(d2 => `img/${d1}${d2}.jfif`));

  const targetIndex = images.indexOf(`img/${targetCode}.jfif`);
  if (targetIndex === -1) {
    console.error(`Target image not found: img/${targetCode}.jfif`);
    return;
  }

  function updateImage() {
    if (images[currentIndex]) {
      imageElement.src = images[currentIndex];
    } else {
      console.error(`Image not found: ${images[currentIndex]}`);
    }

    currentIndex = (currentIndex + 1) % images.length;

    if (slowdownStart > 0) {
      slowdownStart--;
      speed *= 1.1; // Плавніше сповільнення
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
