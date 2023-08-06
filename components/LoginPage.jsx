const React = require('react');
const Layout = require('./Layout');

function LoginPage({ user }) {
  return (
    <Layout user={user}>
      <div className="js-container">
        <h1>Авторизация</h1>
        <form id="login-form">
          <div className="mb-3">
            <label htmlFor="exampleInputLogin1" className="form-label">
              Логин
            </label>
            <input type="login" name="login" className="form-control" id="exampleInputLogin1" aria-describedby="loginHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Пароль
            </label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-success" type="submit">
              Вход
            </button>
          </div>
        </form>
      </div>
      <script src="/js/login.js" />
    </Layout>
  );
}

module.exports = LoginPage;
