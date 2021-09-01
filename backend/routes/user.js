const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/user');

router.get('/userId', userCtrl.userProfile);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/delete', userCtrl.delete);

module.exports = router;