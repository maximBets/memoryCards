const personalRouter = require('express').Router();
const PersonalAddPage = require('../../components/PersonalAddPage');

personalRouter.get('/add-card', (req, res) => {
  res.send(res.renderComponent(PersonalAddPage));
});

module.exports = personalRouter;
