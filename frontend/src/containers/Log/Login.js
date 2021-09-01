import React, { useState } from "react";
import axios from "axios";
import './Login.css';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => { 
    e.preventDefault();
    const error = document.querySelector('.error');
    axios({
      method: "post",
      url: 'http://localhost:3000/api/user/login',
      data : {
        email,
        password,
      }
      
    })
      .then(res => {
        if (res.data.errors){
          console.log(res);
          error.innerHTML = res.data.errors;
        }else {
        localStorage.setItem(
          "userData",
            JSON.stringify({
                userId: res.data.userId,
            })
          );
          window.location = "/Accueil"
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="Login">
      <div className="connection">
        <h1>Se connecter</h1>
        <br/><br/><br/>
        <form id="login" className="login-form" onSubmit={handleLogin}>
        <label className="htmlForm" id="email">Adresse mail</label>
          <input 
            type="email"  
            id="email" 
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        <br/>
        <label className="htmlForm" id="password">Mot de passe</label>
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
        <input type="submit" value="Se connecter" className="button" />
        <br/>
        
      </form>
    </div>
  </div>
  );
};

export default Login;