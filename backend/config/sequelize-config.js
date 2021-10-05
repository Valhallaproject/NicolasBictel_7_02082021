const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
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

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });


  db.users.hasMany(db.posts,{onDelete: "CASCADE",foreignKey: 'userId'});
  db.users.hasMany(db.comments,{onDelete: "CASCADE",foreignKey: 'postId'});
  
  db.posts.hasMany(db.comments,{onDelete:"CASCADE",foreignKey: 'postId'});
  db.posts.belongsTo(db.users,{onDelete: "CASCADE"});
      
  db.comments.belongsTo(db.users,{onDelete:"CASCADE"});
  db.comments.belongsTo(db.posts,{onDelete:"CASCADE"})




module.exports = db;