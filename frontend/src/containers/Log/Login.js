import axios from "axios";
import React, { useState } from "react";
import TokenService from "../../services/token.service";
import './Login.css';


const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => { 
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
      .then(response => {
          if (response.data.token) {
            TokenService.setUser(response.data.userId);
            console.log(response.data.userId);
          }
        if (response.data.errors){
          console.log(response.data.errors);
          error.innerHTML = response.data.errors;
        }else {
          console.log(response)
          window.location = "/"
        }
       console.log(response)
          try {
            const { token } = response.data;
            console.log(token);
            window.localStorage.setItem("accessToken", token);
            JSON.stringify({ token }, null, 2) 
            
          } catch (err) {
          }
      }) 
  }
    
  return (
    <div className="Login">
      <div className="connection">
        <h1>Se connecter</h1>
        <br/><br/><br/>
        <form id="login" className="login-form" onSubmit={submitHandler}>
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
  )
};

export default Login;