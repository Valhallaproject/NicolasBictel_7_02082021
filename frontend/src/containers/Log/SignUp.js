import axios from "axios";
import React, { useState } from "react";
import './SignUp.css';

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
      .then((response) => {
        if(response.data.error){
          error.innerHTML = response.data.error;
        }
        if(response.data.message){
          error.innerHTML = response.data.message;
        }
        console.log(response.data.error);
        console.log(response.data.message);
        if(response.data.message === undefined && response.data.error === undefined) {
          alert('Votre compte a bein été créé, vous pouvez vous conncecter')
          window.location.reload()
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
      <label className="htmlForm" id="lastName"></label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Nom"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <br/>
        <label className="htmlForm" id="firstName"></label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Prénom"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <br/>
        <label className="htmlForm" id="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br/>
        <label className="htmlForm" id="password" data-error="Minimum une majuscule, un chiffre et 8 lettres"></label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br/>
        <div className="error"></div>
        <br/>
        <input type="submit" value="S'inscrire"  className="button"/>
        
      </form>
    </div>
    </div>
  );
}
  
export default SignUp;