const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/create').post(userController.create);
router.route('/:id').get(userController.getProfile);
router.route('/test').get(userController.userTest);

module.exports = router;
