import axios from "axios";
import React, { useState } from "react"; 

function FormUpdate () { 
  const token = localStorage.getItem('accessToken'); 
  const user = JSON.parse(localStorage.getItem('user'));
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [error, setError] = useState("")
  
  const handleUpdate = (e) => {
    e.preventDefault();

    if( firstName === undefined || lastName === undefined){ 
      setError("Tous les champs doivent être remplis !")
    }
    const data = {
      id : user,
      firstName : firstName,
      lastName: lastName
    }
        axios.put('http://localhost:3001/api/user/update', {data:data},{
          headers:{
            "accept": "applicacation/json",
            "Authorization": token
          }
        })
        .then((response)=>{
          if(response.data.error){
            setError(response.data.error)
          }else{
             window.location.reload();
          } 
        })
       
  }
  return (
    <div className="update">
      <form  id="update" className="update-form"  onSubmit={handleUpdate}>
      <label className="htmlForm" id="firstName" htmlFor="firstName">Prénom</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br/>
        <label className="htmlForm" id="lastName" htmlFor="lastName">Nom</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br/>
        <p className="errorModale">{error}</p>
        <input type="submit" value="Modifier"  className="button"/>
        
      </form>
    </div>
  );
}
  
export default FormUpdate;
