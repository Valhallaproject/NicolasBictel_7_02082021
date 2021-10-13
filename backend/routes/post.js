const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const postCtrl = require('../controllers/post');
const multer = require("../middleware/multer-config")


router.post('/addPost', auth, multer, postCtrl.addPost);
router.get("/allPost", multer, postCtrl.getAllPost)
router.get('/userPost',  postCtrl.getPostUser);
router.delete('/delete', postCtrl.deletePost);

module.exports = router;