const router = require('express').Router();
const userRoutes = require('./userRoutess');
const thoughtsRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
