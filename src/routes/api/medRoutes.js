const router = require('express').Router();
const medicationController = require('../../controllers/medicationController');

router.route('/display').get(medicationController.display);
router.route('/test').get(medicationController.medTest);
router.route('/addmed').post(medicationController.addMed);

module.exports = router;
