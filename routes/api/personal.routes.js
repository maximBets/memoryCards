const personalApiRouter = require('express').Router();
const { Card, Theme } = require('../../db/models');

personalApiRouter.post('/add-card', async (req, res) => {
  const { eng_word,  rus_word, theme_title } = req.body;
  try{

  const theme = await Theme.findOne({ where: { theme_title } })
  console.log(theme);
   if (theme) {
     const newCard = await Card.create({
       eng_word,
       rus_word,
       theme_id: theme.id
     })
   } else {
    const newTheme = await Theme.create({ theme_title })
    const newCard = await Card.create({
      eng_word,
      rus_word,
      theme_id: newTheme.id
    })
   }

  } catch(error) {
   console.log(error);
  }

});

module.exports = personalApiRouter;
