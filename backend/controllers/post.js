const Post = require('../models/Post')
const db = require('../config/sequelize-config');

exports.addPost = (req, res) => {
  if (!req.body.content) {
      return res.status(400).json({ error: "Aucun contenu" });
  }

  const post = {
      content: req.body.content,
  };
  Post.create(post)
      .then(() => res.status(201).json({ message: "Post enregistré" }))
      .catch(error => res.status(400).json({ error }));
};

exports.getAllPost= (req, res,) => {
    Post.findAll()
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res) => {
    Post.findOne({    
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
