// --Обробка відправлення форми form відповідно до події submit
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  // console.log(event.currentTarget);
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return console.log('Plese all fields must be filled');
  }
  console.log({
    email: email.value,
    password: password.value,
  });
  event.currentTarget.reset();
}
