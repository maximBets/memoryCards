const React = require('react');

function Layout({ children, user }) {
  return (
    <html lang="ru" data-bs-theme="dark">
      <head>
        <meta charSet="UTF-8" />
        <title>English words</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>

      <body className="text-emphasis-secondary">
        <header className="bg-primary">
          {user ? (
            <ul className="nav justify-content-end js-header p-3">
              <nav className="nav js-nav">
                <li className="nav-link disabled js-nav-link text-light mr-3">Привет, {user?.login}!</li>
                <a className="btn btn-light mr-3" href="/personal/add-card">
                  Личный кабинет
                </a>
                <a className="btn btn-outline-light" href="/auth/logout">
                  Выход
                </a>
              </nav>
            </ul>
          ) : (
            <ul className="nav justify-content-center js-header">
              <div className="d-flex">
                <nav className="nav btn-nav">
                  <a className="btn btn-light js-btn" href="/auth/register">
                    Регистрация
                  </a>
                  <a className="btn btn-light js-btn" href="/auth/login">
                    Вход
                  </a>
                </nav>
              </div>
            </ul>
          )}
        </header>
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
