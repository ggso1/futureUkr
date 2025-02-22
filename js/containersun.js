function toggleForm() {
  const formContainer = document.getElementById('formContainer');
  if (formContainer) {
    if (formContainer.style.display === 'block') {
      formContainer.style.display = 'none';
      console.log('Форма прихована');
    } else {
      formContainer.style.display = 'block';
      console.log('Форма відкрита');
    }
  } else {
    console.error('formContainer не знайдено');
  }
}

function confirmName() {
  const username = document.getElementById('username').value;
  if (username) {
    alert(`Привіт, ${username}!`);
  } else {
    alert('Будь ласка, введіть своє ім\'я!');
  }
}
