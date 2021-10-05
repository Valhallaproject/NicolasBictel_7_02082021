'use strict'
module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('comment', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
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
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Posts',
                key: 'id'
            },
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
              },
        },
        
    })

    Comments.sync()
    .then(() => console.log("Table comments créé"))
    .catch(error => console.log(error));

    return Comments;

}

