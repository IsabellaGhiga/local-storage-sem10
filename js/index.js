document.getElementById('buttonText').addEventListener('click', () => {
  const inputValue = document.getElementById('inputText').value;
  localStorage.setItem('userInput', inputValue);
});
