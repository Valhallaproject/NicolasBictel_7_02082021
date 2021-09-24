const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const postCtrl = require('../controllers/post');


router.post('/addPost', auth, postCtrl.addPost);
router.get("/allPost", auth, postCtrl.getAllPost)
router.get('/userPost',  postCtrl.getPostUser);
router.delete('/delete', postCtrl.deletePost);

module.exports = router;