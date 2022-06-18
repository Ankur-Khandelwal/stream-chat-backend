const express = require('express');
const router = express.Router();
const {signup, login, test} = require('../controllers/auth');

router.post('/signup', signup);
router.post('/login', login);
router.get('/test', test);

module.exports = router;