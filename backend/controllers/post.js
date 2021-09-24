const Post = require('../models/Post')
const User = require('../models/User')
const db = require('../config/sequelize-config');

exports.addPost = (req, res) => {
  if (!req.body.content) {
      return res.status(400).json({ error: "Aucun contenu" });
  }
  const post = {
      content: req.body.content,
      userId : req.body.userId
  };
  db.posts.create(post)
      .then(() => res.status(201).json({ message: "Post enregistré" }))
      .catch(error => res.status(400).json({ error }));
};

exports.getAllPost= (req, res,) => {
    db.posts.findAll({
        include: [
            {
                model: db.users,
            }
        ]
    })
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
};
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

exports.deletePost = (req, res) => {
    db.posts.findOne({    
        where : {id : req.body.id}
    })
    .then(post => {
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
};
