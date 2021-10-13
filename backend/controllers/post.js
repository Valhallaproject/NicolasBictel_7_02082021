const  posts  = require('../config/sequelize-config');
const db = require('../config/sequelize-config');

exports.addPost = (req, res) => {
    //const media = (req.body.media);
    //const content = (req.body.content);
    const mediaUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    const post = {
      media: mediaUrl,
      content: req.body.content,
      userId : req.body.userId,
    }   
  
  db.posts.create(post)
      .then(() => res.status(201).json({ message: "Post enregistré" }))
      .catch(error => res.status(400).json({ error }));
};

exports.getAllPost= (req, res,) => {
    db.posts.findAll({
        include:[
            {model: db.users}
        ]
    })
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
  /*const media = (req.body.data.media);
  const content = (req.body.data.content);
  
  const postObject= req.file ?
    {
      //...JSON.parse(req.body.data.post),
      photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
      
    } : { ...req.body.data };
  /*const userBanner= req.file ?
    {
      ...JSON.parse(req.body.dat.user),
      banner: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body.dat };*/
  /*posts.save({
    firstName: firstName ? firstName: user.firstName,
    lastName: lastName ? lastName: user.lastName,
    photo: photo ? photo: user.photo,
    banner: banner ? banner: user.banner
  },
  {where: { id: req.body.data.id }},
  { ...userObject, where :{ id: req.body.data.id}})
    .then(() => res.status(200).json({ message: 'Profil modifié !'}))
    .catch(error => res.status(400).json({ error }));*/

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
        where : {id : req.body.id},
        include: [
            {
                model: db.comments,
                model: db.users
            }
          ]
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

