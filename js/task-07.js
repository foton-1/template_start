// --подія input змінює інлайн-стиль font-size--
const sizeInput = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeInput.addEventListener('input', () => {
  textEl.style.fontSize = `${sizeInput.value}px`;
});
