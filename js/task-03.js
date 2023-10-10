const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert('Усі поля повинні бути заповнені');
    return;
  }

  const loginData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(loginData);

  loginForm.reset();
});
