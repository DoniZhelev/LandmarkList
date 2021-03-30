const router = require('express').Router();

const authController = require('./controllers/authController');
const petController = require('./controllers/petController');

router.use('/auth', authController);
router.use('/', petController);

module.exports = router;