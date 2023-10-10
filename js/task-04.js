const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

let counterValue = 0;

decrementBtn.style.backgroundColor = 'red';
decrementBtn.style.padding = '20px';
decrementBtn.style.fontSize = '20px';

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

incrementBtn.style.backgroundColor = 'green';
incrementBtn.style.padding = '20px';
incrementBtn.style.fontSize = '20px';

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});
