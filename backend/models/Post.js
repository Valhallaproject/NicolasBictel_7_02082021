const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize-config');

const post = sequelize.define('post', {
    
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    media: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

// Création de la table 'posts'
post.sync()
    .then(() => console.log("Table post créé"))
    .catch(error => console.log(error));

module.exports = post;