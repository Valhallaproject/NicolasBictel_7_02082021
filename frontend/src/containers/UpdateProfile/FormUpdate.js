import axios from "axios";
import React, { useState } from "react"; 

function FormUpdate () { 
  const token = localStorage.getItem('accessToken'); 
  const user = JSON.parse(localStorage.getItem('user'));
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  

  const handleUpdate = (e) => {
    e.preventDefault();
    //const data = new FormData();
    //data.append("id", user)
    //data.append("firstName", firstName)
    //data.append("lastName", lastName)

    const data = {
      id : user,
      firstName : firstName,
      lastName: lastName
    }
    console.log(data)

        axios.put('http://localhost:3000/api/user/update', {data:data},{
          headers:{
            "accept": "applicacation/json",
            "Authorization": token
          }
        })
        .then((response)=>console.log(response)
          
            
                
                          
        )
        //window.location.reload();117, 110, 100, 101, 102, 105, 110, 101, 100
       
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
        <input type="submit" value="Modifier"  className="button"/>
        
      </form>
    </div>
  );
}
  
export default FormUpdate;
