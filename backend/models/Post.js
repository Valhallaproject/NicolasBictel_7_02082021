'use strict'
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('post', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        media: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
              },
        }
    })
    
    Posts.sync()
    .then(() => console.log("Table post créé"))
    .catch(error => console.log(error));

    return Posts;

}
