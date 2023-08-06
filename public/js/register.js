const form = document.getElementById('register-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const forma = event.target;
  // console.log(forma);
  const { login, password, password2 } = forma;
  // console.log(password.value);
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      login: login.value,
      password: password.value,
      password2: password2.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  //  статус ответа < 400
  if (response.ok) {
    // редирект на главную
    window.location.href = '/themes';
  } else {
    // произошла ошибка, выводим сообщение
    const result = await response.json();
    alert(result.message);
  }
});
