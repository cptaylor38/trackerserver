const jwt = require('jsonwebtoken');
const db = require('../models');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: 'You must be logged in.' });
  }
  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, 'secret_key', async (err, payload) => {
    try {
      const { userId } = payload;
      const user = await db.User.findById(userId);
      req.user = user;
      next();
    } catch (err) {
      res.status(401).send('You must be logged in.', err, authorization);
    }
  });
};
