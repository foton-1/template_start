// --зміна кольори фону елемента <body> через інлайн-стиль по кліку--
// --функція рондомне число
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// --зміна кольору
const widgetEl = document.querySelector('.widget');
const colorEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');
// console.log(getRandomHexColor());
buttonEl.addEventListener('click', () => {
  colorEl.textContent = getRandomHexColor();
  widgetEl.parentNode.style.backgroundColor = getRandomHexColor();
});
