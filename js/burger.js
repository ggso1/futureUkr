document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.burger-button');
  const modalMenu = document.querySelector('.modal-menu');
  const closeButton = document.querySelector('.close-button');

  burgerButton.addEventListener('click', () => {
    modalMenu.classList.add('active');
    modalMenu.setAttribute('aria-hidden', 'false');
  });

  closeButton.addEventListener('click', () => {
    modalMenu.classList.remove('active');
    modalMenu.setAttribute('aria-hidden', 'true');
  });

  document.addEventListener('click', (e) => {
    if (!modalMenu.contains(e.target) && !burgerButton.contains(e.target)) {
      modalMenu.classList.remove('active');
      modalMenu.setAttribute('aria-hidden', 'true');
    }
  });
});

