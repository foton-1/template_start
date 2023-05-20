// --втрата фокусу на інпуті (подія blur)--
const textInput = document.getElementById('validation-input');
textInput.addEventListener('blur', event => {
  if (
    event.currentTarget.value.length === +textInput.getAttribute('data-length')
  ) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('invalid');
    textInput.classList.add('invalid');
  }
  console.log(event);
});
