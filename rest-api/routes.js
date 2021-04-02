const router = require('express').Router();

const authController = require('./controllers/authController');
const landmarkController = require('./controllers/landmarkController');

router.use('/auth', authController);
router.use('/', landmarkController);

module.exports = router;