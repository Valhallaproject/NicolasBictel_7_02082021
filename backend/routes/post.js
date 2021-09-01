const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const postCtrl = require('../controllers/post');


router.post('/addPost', postCtrl.addPost);
router.delete('/delete', postCtrl.deletePost);

module.exports = router;