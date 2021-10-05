const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const userCtrl = require('../controllers/user');

router.get('/userId', multer, userCtrl.userProfile);
router.get('/allUser', auth, multer, userCtrl.allUserProfile)
router.post('/signup', userCtrl.signup);
router.post('/login',userCtrl.login);
router.delete('/delete' ,multer, userCtrl.delete);
router.put("/update", multer,  userCtrl.updateProfile);

module.exports = router;