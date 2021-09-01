const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize-config');

// Création du modèle 'User'
const user = sequelize.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
});

// Création de la table 'users'
user.sync()
    .then(() => console.log("Table utilisateur créé"))
    .catch(error => console.log(error));

module.exports = user;