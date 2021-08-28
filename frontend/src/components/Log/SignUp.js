import axios from "axios";
import React, { useState } from "react";
import '../../style/SignUp.css';

function SignUp () { 
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const error = document.querySelector('.error');
    axios({
      method: "post",
      url: 'http://localhost:3000/api/user/signup',
      data :{
          lastName,
          firstName,
          email,
          password,
      }
    })
      .then((res) => {
        if(res.data.error){
          console.log(res)
          error.innerHTML = res.data.error;
        }
        if(res.data.message){
          error.innerHTML = res.data.message;
        }
        else{
          window.location ="/Accueil"
        }
      })
      .catch((err) => {
        console.log(err);
      });        
  }
  return (
    <div className="register">
    <div className="inscription">
      <h1>S'inscrire</h1>
      <br/><br/><br/>
      <form id="signIn" className="signUp-form" onSubmit={handleSignUp}>
      <label className="htmlForm" id="lastName">Nom</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <br/>
        <label className="htmlForm" id="firstName">Prénom</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <br/>
        <label className="htmlForm" id="email">Adresse mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br/>
        <label className="htmlForm" id="password" data-error="Minimum une majuscule, un chiffre et 8 lettres">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br/>
        <div className="error"></div>
        <br/>
        <input type="submit" value="S'inscrire" className="button" />
        
      </form>
    </div>
    </div>
  );
}
  
export default SignUp;