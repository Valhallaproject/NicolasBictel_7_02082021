const db = require('../config/sequelize-config');


exports.addComment = (req, res) => {
    if (!req.body.content) {
        return res.status(400).json({ error: "Aucun contenu" });
    }
    const comment = {
        content: req.body.content,
        postId : req.body.postId,
        userId: req.body.userId
    };
    db.comments.create(comment)
        .then(() => res.status(201).json({ message: "Commentaire enregistré" }))
        .catch(error => res.status(400).json({ error }));
};

exports.getCommentPost= (req, res) => {
    db.comments.findAll({
        where:{
            postId: req.query.postId
        },
        include: [
            {
                model: db.users,
            }
        ]
    })
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllComment= (req, res,) => {
    db.comments.findAll({
        include: [
            {
                model: db.posts,
                
            }
        ]
    })
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteComment = (req, res) => {
    db.comments.findOne({    
        where : {id : req.body.id}
    })
    .then(comment => {
        comment.destroy({   
            id: req.params.id
        })
        .then(() => res.status(200).json({
            message: 'Commentaire supprimée !'
        }))
            .catch(error => res.status(400).json({
            error
        }));
    })
};

exports.deleteCommentUser = (req, res) => {
    db.comments.findAll({
        where:{
            userId: req.body.userId
        }
    })
    .then(comment => {
        comment.s()
        .then(() => res.status(200).json({
            message: 'Commentaire supprimée !'
        }))
            .catch(error => res.status(400).json({
            error
        }));
    })
};
