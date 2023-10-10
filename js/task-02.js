const rangeInput = document.getElementById('font-size-control');
const onText = document.getElementById('text');

onText.style.fontSize = rangeInput.value + 'px';

const textResizing = () => {
  onText.style.fontSize = `${rangeInput.value}px`;
};

rangeInput.addEventListener('input', textResizing);
