const { User } = require('../models');
const db = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {
  getProfile: function (req, res) {
    db.User.findOne({ id: req.params.id })
      .populate('medications')
      .exec((err, profile) => {
        if (err) throw err;
        res.json(profile);
      });
  },
  create: function (req, res) {
    res.send(req.body);
    // db.User.create(req.body, (err, res) => {
    //   if (err) throw err;
    //   console.log(res);
    // });
  },
  userTest: function (req, res) {
    res.send('user test route');
  },
};
