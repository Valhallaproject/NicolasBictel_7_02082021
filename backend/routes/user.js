const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const userCtrl = require('../controllers/user');

router.get('/userId',multer, userCtrl.userProfile);
router.get('/allUser', auth, multer, userCtrl.allUserProfile)
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/delete',auth, userCtrl.delete);
router.put("/updateBanner", auth, multer, userCtrl.updateBanner);
router.put("/updatePhoto", auth, multer, userCtrl.updatePhoto);
router.put("/update",  auth,userCtrl.update);

module.exports = router;