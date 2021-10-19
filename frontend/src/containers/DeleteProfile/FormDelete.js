import axios from "axios";
import TokenService from "../../services/token.service";
import React, { useState } from "react";

function FormDelete ()  {
  const token = localStorage.getItem('accessToken');
  const user = (localStorage.getItem('user'));
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  axios.get('http://localhost:3001/api/user/userId', {
      params:{
          id : user
      } 
  },
  { 
      headers:{
          "Content-Type": 'application/json',
          "Authorization": token
      } 
  })
  .then((response) =>{
    setUserEmail(response.data.email);
    setUserPassword(response.data.password);
    console.log(userEmail);
    console.log(userPassword)
  })
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:3001/api/user/delete',{
      data:{
        email,
        password
      },
      headers:{'Authorization': token}
    })
    .then((response)=>{
      if((email !== "" && password !== "" )){ 
        alert("votre compte à bien été supprimé !")
        TokenService.removeUser();
        window.location = "/Log"
      }else{
        setError("Email ou Mot de passe incorrect")
      }
      console.log(response);                
      
    }) }

  return (
    <div className="delete">
      <form id="delete" className="delete-form" onSubmit={handleDelete}>
      <label className="htmlForm" id="email">Email</label>
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
        <p className="errorModale">{error}</p>
        <input type="submit" value="Supprimer"  className="button"/>
        
      </form>
    </div>
  );
}
  
export default FormDelete;