import axios from "axios";
import TokenService from "../../services/token.service";
import React, { useState } from "react";

function FormUpdate () { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleDelete = (e) => {
    e.preventDefault();
                
                
    axios.delete('http://localhost:3000/api/user/delete',{
      data:{
        email,
        password
      },
      headers:{'Authorization': "x-access-token"}
    })
    .then((response)=>{
      console.log(response);                
      TokenService.removeUser();
      window.location = "/Log"
                      
    })   
  }
            
            
   
  
  return (
    
      
    <div className="update">
      <form id="update" className="update-form" onSubmit={handleDelete}>
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
        <input type="submit" value="Supprimer"  className="button"/>
        
      </form>
    </div>
  );
}
  
export default FormUpdate;