const router = require('express').Router();


const landmarkController = require('./controllers/landmarkController');


router.use('/', landmarkController);

module.exports = router;