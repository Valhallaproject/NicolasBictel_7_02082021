import axios from "axios";
import React, { useState} from "react";
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
        if (response.data) {
          TokenService.setUser(response.data.userId);
        }
        if (response.data.errors){
          error.innerHTML = response.data.errors;
        }else {
          window.location = "/"
        }
        
        try {
          const { token } = response.data;
          window.localStorage.setItem("accessToken", token);
          JSON.stringify({ token }, null, 2) 

          }catch (err) {
          }
      }) 
  }
    
  return (
    <div className="Login">
      <div className="connection">
        <h1>Se connecter</h1>
        <br/><br/><br/>
        <form id="login" className="login-form" onSubmit={submitHandler}>
        <label className="htmlForm" id="email"></label>
          <input 
            type="email"  
            id="email" 
            name="email"
            placeholder="Adresse mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        <br/>
        <label className="htmlForm" id="password"></label>
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
        <input type="submit" value="Se connecter" className="button" />
        <br/>
        
      </form>
    </div>
  </div>
  )
};

export default Login;