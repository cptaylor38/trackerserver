const db = require('../models');

module.exports = {
  display: function (req, res) {
    let userId = req.params.id;
    db.User.findOne({ _id: userId })
      .populate('medication')
      .then((data) => {
        res.json(data);
      });
  },
  medTest: async function (req, res) {
    console.log('medication route reached');
    try {
      await res.send('test route on medication route reached');
    } catch (err) {
      console.log(err);
    }
  },
};
