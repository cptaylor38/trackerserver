const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('./authRoutes');
const requireAuth = require('../middleware/requireAuth');

router.use('/api', requireAuth, apiRoutes);
router.use('/auth', authRoutes);

module.exports = router;
