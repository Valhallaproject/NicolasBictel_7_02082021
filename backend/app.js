const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comments');

const app = express();

//manage cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)


module.exports = app;