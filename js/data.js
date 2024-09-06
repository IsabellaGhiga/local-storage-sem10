document.addEventListener('DOMContentLoaded', () => {
  const userInput = localStorage.getItem('userInput');
  document.getElementById('data').textContent = userInput
    ? userInput
    : 'No existen datos almacenados';
});
