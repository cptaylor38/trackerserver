const router = require('express').Router();
const medicationController = require('../../controllers/medicationController');

router.route('/create').get(medicationController.display);

module.exports = router;
