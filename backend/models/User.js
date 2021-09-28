'use strict'

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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
        banner: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        admin: { 
            type: DataTypes.STRING, 
            allowNull: true, 
            default : 'user'
        },
    });

    Users.sync()
    .then(() => console.log("Table utilisateur créé"))
    .catch(error => console.log(error));

    return Users;  
};