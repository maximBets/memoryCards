const container = document.querySelector('.js-card-container');

// делегируем обработчик событий на весь контейнер, где у нас создаются card
container.addEventListener('click', async (event) => {
  // проверяем, на каком именно элементе сработал click через массив classList, который содержит классы
  if (event.target.classList.contains('btn-add')) {
    const btn = event.target;

    const id = btn.dataset.cardId;
    // console.log(123);
    // console.log(btn.dataset.cardId);
    // console.log(123);

    // сделать запрос на добавление в БД
    const response = await fetch(`/api/add-card/${id}`, {
      method: 'POST',
    });

    const json = await response.json(); //  чтобы достать тело ответа

    // смотрим, что там вернулось
    // console.log(json);
    if (json.success) {
      btn.textContent = 'Выучено';
      btn.disabled = true;
    } else console.log(json.message);

    // обновить страницу без перезагрузки
  }
});

/**
 * https://www.lottejackson.com/learning/a-reusable-javascript-toggle-pattern
 */

const addToLearnButton = document.querySelectorAll('.btn-add-to-learn');

addToLearnButton.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log('clicked');
  });
});

(function () {
  const Toggler = function (toggleWrapper) {
    let toggleButton, toggleTarget, target, i;
    let toggle = function (e) {
      toggleWrapper.classList.toggle('is-flipped');

      if ('false' === toggleButton.getAttribute('aria-expanded')) {
        toggleButton.setAttribute('aria-expanded', 'true');
      } else {
        toggleButton.setAttribute('aria-expanded', 'false');
      }

      e.preventDefault();
    };

    this.init = function () {
      toggleButton = toggleWrapper.querySelector('.js-toggleButton');

      toggleTarget = toggleButton.getAttribute('data-aria-controls');

      target = document.getElementById(toggleTarget);

      target.classList.add('js-toggleTarget');

      toggleWrapper.removeAttribute('tabindex');
      toggleButton.setAttribute('aria-expanded', 'false');
      toggleButton.setAttribute('aria-controls', toggleTarget);

      toggleButton.addEventListener('click', toggle, false);
    };
  };

  var toggles = document.querySelectorAll('.js-toggleWrapper'),
    togglesTotal = toggles.length,
    i,
    toggle;

  for (i = 0; i < togglesTotal; i = i + 1) {
    //A new instance of the Toggler object is stored in the toggle variable on each iteration of the loop
    toggle = new Toggler(toggles[i]);
    toggle.init();
  }
})();
