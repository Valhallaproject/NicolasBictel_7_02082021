const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const commentCtrl = require('../controllers/comments');


router.post('/addComment', commentCtrl.addComment);
router.get('/getAll',  commentCtrl.getAllComment);
router.get('/postId',  commentCtrl.getCommentPost);
router.delete('/delete', commentCtrl.deleteComment);

module.exports = router;