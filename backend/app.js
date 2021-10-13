const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');


const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comments');

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)


module.exports = app;