// --Під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output.

const textInput = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');
textInput.addEventListener('input', event => {
  outputField.textContent = event.currentTarget.value;
  if (!event.currentTarget.value) {
    outputField.textContent = 'Anonymous';
  }
});
console.log(outputField);
