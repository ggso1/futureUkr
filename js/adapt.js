const img = document.querySelector('.draggable-image');
const container = document.querySelector('.map-container');

let isDragging = false;
let startX, startY, startLeft, startTop;
let scale = 1;  // Початковий масштаб

// Перетягування
img.addEventListener('mousedown', function(e) {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  startLeft = parseFloat(img.style.left) || 0;
  startTop = parseFloat(img.style.top) || 0;
  img.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function(e) {
  if (!isDragging) return;

  const dx = e.clientX - startX;
  const dy = e.clientY - startY;

  let newLeft = startLeft + dx;
  let newTop = startTop + dy;

  // Обмеження руху картинки всередині контейнера
  const maxX = 0;
  const maxY = 0;
  const minX = container.offsetWidth - img.offsetWidth * scale;
  const minY = container.offsetHeight - img.offsetHeight * scale;

  newLeft = Math.min(maxX, Math.max(newLeft, minX));
  newTop = Math.min(maxY, Math.max(newTop, minY));

  img.style.left = `${newLeft}px`;
  img.style.top = `${newTop}px`;
});

document.addEventListener('mouseup', function() {
  isDragging = false;
  img.style.cursor = 'grab';
});

// Масштабування (Zoom)
container.addEventListener('wheel', function(e) {
  e.preventDefault(); // Забороняє прокрутку сторінки

  const zoomSpeed = 0.1;
  scale += e.deltaY > 0 ? -zoomSpeed : zoomSpeed; // Збільшення або зменшення масштабу

  scale = Math.max(1, Math.min(scale, 3)); // Обмеження масштабу між 1x і 3x

  img.style.transform = `scale(${scale})`;

  // Оновлення обмежень після зміни масштабу
  img.style.left = '0px';
  img.style.top = '0px';
});
