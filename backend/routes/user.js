const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-profile');

const userCtrl = require('../controllers/user');

router.get('/userId', userCtrl.userProfile);
router.get('/allUser', auth, multer, userCtrl.allUserProfile)
router.post('/signup', userCtrl.signup);
router.post('/login',userCtrl.login);
router.delete('/delete' , userCtrl.delete);
router.put("/update",auth, multer,  userCtrl.updateProfile);

module.exports = router;