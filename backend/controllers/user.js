const User = require('../models/User');
const bcrypt = require('bcrypt');    //Plugin for hashing the password
const jwt = require('jsonwebtoken');     //Plugin for token creation
const passwordValidator = require('password-validator');    //plugin to valid password
const db = require('../config/sequelize-config');
//const mysql = require("mysql2");
const fs = require('fs'); 


const user = db.users
//const post = db.posts

const url = 'http://localhost:3000/images/'

const schemaPassword = new passwordValidator();
schemaPassword
.is().min(8)    //Minimum length: 8 characters                                    
.is().max(20)    //Maximum length: 20 characters                                 
.has().uppercase()    //Must have at least one capital letter                              
.has().lowercase()    //Must have at least one lowercase                              
.has().digits()    //Must have at least one number
.has().not().spaces();    //Must not have spaces

//creation of a user account
exports.signup = (req, res, next) => {
  const email = (req.body.email);
  const firstName = (req.body.firstName);
  const lastName = (req.body.lastName);
  const password = (req.body.password);
  const admin = "admin@groupomania.fr"
  


  const regexLastName = /^[A-Z][A-Za-z\é\è\ê\ø\-]+$/;
  const verifyLastName = lastName.match(regexLastName);
  const regexFirstName = /^[A-Z][A-Za-z\é\è\ê\ø\-]+$/;
  const verifyFirstName = firstName.match(regexFirstName);
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const verifyEmail = email.match(regexEmail);

  if (lastName === "" || firstName === "" || email === "" || password === ""){
    return res.status(201).json({ error : "Tous les champs doivent être renseigné !"});
  } 
  if(lastName != verifyLastName){
    return res.status(201).json({ error : "Votre Nom ne doit comporter que des lettres et au moins une majuscule !"});
  }
  if(firstName != verifyFirstName){
    return res.status(201).json({ error : "Votre prénom ne doit comporter que des lettres et au moins une majuscule  !"});
  }
  if(email != verifyEmail){
    return res.status(201).json({ error : "Veuillez entrer une adresse email Valide !"});
  }

  if(schemaPassword.validate(password) && email === admin) {
    bcrypt.hash(password, 10)    //we hash the password
    .then(hash => {
      const user = db.users.build({
        email: email,    
        firstName : firstName,
        lastName: lastName,
        password: hash,   //we assign the hash obtained as the value of the password property
        admin: "admin"
      });
      user.save()    //we save the data in the database
        .then(() => res.status(201).json({userId: user.id,
          token: jwt.sign(
            { userId: user.id },
            process.env.TOKEN,
            { expiresIn: '24h' },
          )}))//{ message: 'Utilisateur créé !' }
        .catch(error => res.status(201).json({ message : "Utilisateur éxistant !" }));
    })
  }




  else if(schemaPassword.validate(password)) {
  bcrypt.hash(password, 10)    //we hash the password
  .then(hash => {
    const user = db.users.build({
      email: email,    
      firstName : firstName,
      lastName: lastName,
      password: hash    //we assign the hash obtained as the value of the password property
    });
    user.save()    //we save the data in the database
      .then(() => res.status(201).json({userId: user.id,
        token: jwt.sign(
          { userId: user.id },
          process.env.TOKEN,
          { expiresIn: '24h' },
        )}))//{ message: 'Utilisateur créé !' }
      .catch(error => res.status(201).json({ message : "Utilisateur éxistant !" }));
  })
  .catch(error => res.status(500).json({ error }));
} else{
  return res.status(201).json({ error : "Le mot de passe doit comprendre au moins 1 majuscule, 1 minuscule, 1 chiffre et au moins 8 caractéres !"});
}}

//login to a user account
exports.login = (req, res, next) => {
  const email = (req.body.email);
  const password = (req.body.password);
  user.findOne({ where: { email: email }})
    .then(user => {
      if (!user) {
        return res.status(200).json({ errors : "Utilisateur non trouvé !"});
      }
      bcrypt.compare(password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(200).json({ errors : "Mot de passe incorrect !" });
          }
          try{
            res.status(200).json({
            userRole: user.admin,
            userId: user.id,
            token: jwt.sign(
              { userId: user.id },
              process.env.TOKEN,
              { expiresIn: '24h' },
            )
          });
          }
          catch(err){
            res.status(200).json({ error });
          }
        })
         .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};
//delete user account
exports.delete = (req, res) => {
  const email = (req.body.email);
  const password = (req.body.password);
  user.findOne({ where: { email: email },
    
  })
    .then(user => {
      if (!user) {
        return res.status(200).json({ error: 'Utilisateur non trouvé !'});
      }
      bcrypt.compare(password, user.password)
      .then(valid => {
        if (!valid) {
          return res.status(200).json({ error: 'Mot de passe incorrect !' });
        } 
        else if(user === req.file){
          const photo = user.photo.split('/images/')[1];
          fs.unlink(`images/${photo}`, () => {
        user.destroy({ 
          where: { 
            email: email,
           },
        })
            .then(() => res.status(200).json({ message: "Utilisateur supprimé de la base de données" }))
            .catch(error => res.status(500).json({ error }));
          }); 
        }else{
        user.destroy({ 
        where: { 
          email: email,
         },
      })
          .then(() => res.status(200).json({ message: "Utilisateur supprimé de la base de données" }))
          .catch(error => res.status(500).json({ error }));
    }    
    });
    
    })
    .catch(error => res.status(500).json({ error }));
  
  //.catch(error => res.status(500).json({ error }));
};
//AllUserProfile
exports.allUserProfile =  ( req, res, next) => {
  user.findAll( 
     db.users
  )
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json({ error }));
};
//OneUserProfile
exports.userProfile = (req, res,) => {
      user.findOne({ 
         where : {
           id: req.query.id,
         }
      })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({ error }));
   
};
//UpdateProfile
exports.updateBanner= (req, res) => {
    try {
      const bannerUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
      user.update(
        {
          banner: bannerUrl
        },
        {
          where: { id: req.body.id }
        }
      );
      res.status(200).json({
        message: "Banniére modifié"
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}
exports.updatePhoto= (req, res) => {
    try {
      const photoUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
      user.update(
        {
          photo: photoUrl
        },
        {
          where: { id: req.body.id }
        }
      );
      res.status(200).json({
        message: "Photo profile modifié"
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}
exports.update= (req, res) => {
  const firstName = (req.body.data.firstName);
  const lastName = (req.body.data.lastName);      
      
  user.update({
    firstName: firstName ? firstName: user.firstName,
    lastName: lastName ? lastName: user.lastName,
  },
  {where: { id: req.body.data.id }}
  )
    .then(() => res.status(200).json({ message: 'Profil modifié !'}))
    .catch(error => res.status(400).json({ error }));
}





