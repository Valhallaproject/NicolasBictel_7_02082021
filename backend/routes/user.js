const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const userCtrl = require('../controllers/user');

router.get('/userId', userCtrl.userProfile);
router.get('/allUser', auth, userCtrl.allUserProfile)
router.post('/signup', userCtrl.signup);
router.post('/login',userCtrl.login);
router.delete('/delete' , auth, userCtrl.delete);
router.put("/update",  userCtrl.updateProfile);

module.exports = router;