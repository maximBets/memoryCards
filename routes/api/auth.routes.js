const authApiRouter = require('express').Router();

const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authApiRouter.post('/register', async (req, res) => {
  const { login, password, password2 } = req.body;

  // проверяем, что пароли совпадают
  if (password !== password2) {
    res.status(403).json({ success: false, message: 'Пароли не совпадают' });
  }

  // проверяем, Layoutто в БД нет такого пользователя
  const existUser = await User.findOne({ where: { login } });
  if (existUser) {
    res
      .status(409)
      .json({ success: false, message: 'Такой пользователь уже есть' });
  }

  // создаём пользователя в БД

  const user = await User.create({
    login,
    password: await bcrypt.hash(password, 10),
  });

  // авторизация - запоминаем пользователя
  // req.session - хранилище сессии, которое уникально для каждого браузера

  req.session.userId = user.id;
  res
    .status(201)
    .json({ success: false, message: 'Вы успешно зарегестрировались' });
});

authApiRouter.post('/login', async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ where: { login } });

  console.log(user);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.json({
      success: false,
      massege: 'Такого пользователя нет или пароли не совпадают',
    });
    return;
  }

  req.session.userId = user.id;

  res.json({ success: true });
});

module.exports = authApiRouter;
