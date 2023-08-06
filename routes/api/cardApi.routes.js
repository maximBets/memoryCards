const cardApiRouter = require('express').Router();

const { UserCard } = require('../../db/models');

// добавляет существующую карточку в User
cardApiRouter.post('/:id', async (req, res) => {
  const cardId = Number(req.params.id);
  console.log(cardId);
  try {
    console.log(req.session.userId);
    await UserCard.create({
      user_id: req.session.userId,
      card_id: cardId,
      card_status: true,
    });

    // зависит от реализации, что мы отправляем в json
    res.json({ success: true, message: 'Добавлено' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
});

module.exports = cardApiRouter;
