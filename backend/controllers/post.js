const  posts  = require('../config/sequelize-config');
const db = require('../config/sequelize-config');
const fs = require('fs');

//Add a new post
exports.addPost = (req, res) => {
    const userId = (req.body.userId);
    const content = (req.body.content);
    let mediaUrl; 
    if(req.file) { 
       mediaUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
     }else{
        mediaUrl = null
     } 
  db.posts.create({
      media: mediaUrl,
      content: content,
      userId : userId
  })
      .then(() => res.status(201).json({ message: "Post enregistré" }))
      .catch(error => res.status(400).json({ error }));
};

//Display all posts
exports.getAllPost= (req, res,) => {
    db.posts.findAll({
        include:[
            {model: db.users}
        ]
    })
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
};

//Display all posts of one user
exports.getPostUser = (req, res) => {
    db.posts.findAll({
        where : { 
            userId: req.query.userId
        },
        include: [
            {
                model: db.users,
            }
        ]
    })
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
};

//Delete one post
exports.deletePost = (req, res) => {
    db.posts.findOne({    
        where : {id : req.body.id},
        include: [
            {
                model: db.comments,
                model: db.users
            }
          ]
    })
    .then(post => {
        if(post === req.file){
            const filename = post.media.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
            post.destroy({   
                
                id: req.params.id
            })
            .then(() => res.status(200).json({
                message: 'Post supprimée !'
            }))
                .catch(error => res.status(400).json({
                error
            }));
        
        })
        }else{
            post.destroy({   
                
                id: req.params.id
            })
            .then(() => res.status(200).json({
                message: 'Post supprimée !'
            }))
                .catch(error => res.status(400).json({
                error
            }));
        
        }
        
    })
};

