const { Sequelize } = require('sequelize');
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

module.exports = sequelize;