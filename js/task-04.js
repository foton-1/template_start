let counterValue = 0;

const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
const result = document.querySelector('#value');

btnDecr.addEventListener('click', () => {
  counterValue -= 1;
  result.textContent = counterValue;
});

btnIncr.addEventListener('click', () => {
  counterValue += 1;
  result.textContent = counterValue;
});
