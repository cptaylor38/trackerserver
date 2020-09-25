const db = require('../models');
const cheerio = require('cheerio');
const axios = require('axios');

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
  addMed: async function (req, res) {
    //const med = req.body;
    let med = {
      name: req.body.name,
      dosage: req.body.dosage,
      qty: req.body.quantity,
      form: req.body.form,
    };
    let url = `https://www.goodrx.com/${med.name}?dosage=${med.dosage}&form=${med.form}&label_override=${med.name}&quantity=${med.qty}`;

    await axios
      .get(url)
      .then((response) => {
        let $ = cheerio.load(response.data);
        console.log($);
        res.send($);
      })
      .catch((err) => res.json(err));
  },
};
