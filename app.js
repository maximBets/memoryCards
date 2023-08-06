require('dotenv').config();

require('@babel/register');

const express = require('express');
const path = require('path');
const session = require('express-session');

const { PORT } = process.env;

const mainRoute = require('./routes/views/main.routes');
const authRouter = require('./routes/views/auth.routes');
const authApiRouter = require('./routes/api/auth.routes');
const personalRouter = require('./routes/views/personal.routes');
const personalApiRouter = require('./routes/api/personal.routes');
const sessionConfig = require('./config/session');
const getUser = require('./middlewares/getUser');
const renderComponent = require('./middlewares/renderComponent');
const cardsApiRouter = require('./routes/api/cardApi.routes');

const app = express();

app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(getUser);
app.use(renderComponent);

// подключаем роуты
app.use('/', mainRoute);
app.use('/auth', authRouter);
app.use('/api/auth', authApiRouter);
app.use('/api/add-card', cardsApiRouter);
app.use('/personal', personalRouter);
app.use('/api/personal', personalApiRouter);
app.use('/api/cards', cardsApiRouter);

app.listen(PORT, () => {
  console.log(`Сервер пашет на ${PORT}`);
});
