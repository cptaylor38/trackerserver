const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/create').post(userController.create);
router.route('/getprofile:id').get(userController.getProfile);
router.route('/test').get(userController.userTest);
router.route('/signup').post(userController.signUp);

module.exports = router;
