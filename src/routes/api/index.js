const router = require('express').Router();
const userRoutes = require('./userRoutes');
const medicationRoutes = require('./medRoutes');

router.use('/user', userRoutes);
router.use('/medication', medicationRoutes);

module.exports = router;
