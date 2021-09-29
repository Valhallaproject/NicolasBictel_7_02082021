/*const Sequelize  = require('sequelize');
const mysql = require ('mysql2');
require('dotenv').config();

// Configuration de Sequelize
const sequelize = new Sequelize(process.env.SQL_DB, process.env.SQL_USER, process.env.SQL_PASSWD, {
    host: process.env.SQL_HOST,
    dialect: 'mysql',
});
// Vérification de la connexion à la base de données
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error));

module.exports = sequelize;*/

const Sequelize  = require('sequelize');
const mysql = require ('mysql2');
require('dotenv').config();

// Configuration de Sequelize
const sequelize = new Sequelize(process.env.SQL_DB, process.env.SQL_USER, process.env.SQL_PASSWD, {
    host: process.env.SQL_HOST,
    dialect: 'mysql',
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('../models/User.js')(sequelize, Sequelize);
db.posts = require('../models/Post.js')(sequelize, Sequelize);
db.comments = require('../models/Comments.js')(sequelize, Sequelize);

db.posts.belongsTo(db.users,{hooks: true,onDelete: "CASCADE",}),
db.users.hasMany(db.posts);
db.comments.belongsTo(db.posts,{hooks: true,onDelete: "CASCADE",})
db.comments.belongsTo(db.users,{hooks: true,onDelete: "CASCADE",})
db.posts.hasMany(db.comments);
db.users.hasMany(db.comments);

module.exports = db;