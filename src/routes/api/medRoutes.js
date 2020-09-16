const router = require('express').Router();
const medicationController = require('../../controllers/medicationController');

router.route('/create').get(medicationController.display);
router.route('/test').get(medicationController.medTest);

module.exports = router;
