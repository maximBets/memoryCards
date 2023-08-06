const form = document.querySelector('.add-form-card');

console.log(form);
form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const formLog = event.target;
  const { engword, rusword, themetitle } = formLog;
  console.log(engword, rusword, themetitle)
  const response = await fetch('/api/personal/add-card', {
    method: 'POST',
    body: JSON.stringify({
      eng_word: engword.value,
      rus_word: rusword.value,
      theme_title: themetitle.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
 
  response.json({ success: true })

  if (response.ok) {
    alert('Слово успешно добавлено')
  }

})