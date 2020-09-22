const router = require('express').Router();
const db = require('../../models');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new db.User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, 'secret_key');
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'Must provide an email and password.' });
  }
  const user = await db.User.findOne({ email });
  if (!user) {
    return res.status(404).send({ error: 'Invalid password or email.' });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, 'secret_key');
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid password or email.' });
  }
});

module.exports = router;
