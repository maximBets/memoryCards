const { User } = require('../db/models');

async function getUser(req, res, next) {
  const { userId } = req.session;
  res.locals.user = userId && (await User.findByPk(userId));
  next()
}

module.exports = getUser;

