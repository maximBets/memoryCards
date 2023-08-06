const authRouter = require('express').Router();
const LoginPage = require('../../components/LoginPage');
const Register = require('../../components/Register');

authRouter.get('/login', (req, res) => {
  console.log(req.session.userId);
  try {
    if (req.session.userId) {
      return res.redirect('/themes');
    }
    res.send(res.renderComponent(LoginPage));
  } catch (error) {
    console.log(error);
  }
});

authRouter.get('/register', (req, res) => {
  try {
    if (req.session.userId) {
      return res.redirect('/themes');
    }
    res.send(res.renderComponent(Register));
  } catch (error) {
    console.log(error);
  }
});

authRouter.get('/logout', (req, res) => {
  // удаление сессии
  req.session.destroy(() => {
    // очищаем куку (название куки лежит в config/session.js свойство cookie.name)
    res.clearCookie('user_sid');
    res.redirect('/');
  });
});

module.exports = authRouter;
