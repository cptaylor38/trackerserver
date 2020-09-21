const router = require('express').Router();
const db = require('../../models');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
  console.log(req.body);
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

module.exports = router;
