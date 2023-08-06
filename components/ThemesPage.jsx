const React = require('react');
const Layout = require('./Layout');

function ThemesPage({ themes = [], progressInfo, user }) {
  // здесь будет функция для подсчета ширины прогресс бара и процентов
  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  const getWidth = () => [`${randomInteger(1, 200)}px`, 70];
  return (
    <Layout user={user}>
      <div className="themes-container">
        <h1 className="themes-title text-white">Темы</h1>
        <ul className="themes-list d-flex flex-wrap">
          {themes.map((theme) => (
            <li key={theme.id}>
              <div className="card bg-info-subtle" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title text-white fs-3">{theme.theme_title}</h5>
                  <h6 className="card-progress-title">Прогресс по теме: {`${getWidth()[1]}`}%</h6>
                  <div className="card-progress-common">
                    <div className="progress-bar" style={{ width: '200px' }}></div>
                    <div className="progress-bar" style={{ backgroundColor: 'lightgreen', width: `${getWidth()[0]}` }}></div>
                  </div>
                  <a href={`/cards/${theme.id}`} className="btn btn-outline-primary btn-lg fw-bolder">
                    Перейти к изучению
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <script src="/js/themes.js" />
    </Layout>
  );
}

module.exports = ThemesPage;
