import axios from "axios";
import React, { useState } from "react";

function FormUpdate () { 
  const token = localStorage.getItem('accessToken'); 
  const user = JSON.parse(localStorage.getItem('user'));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState(null)
  const [banner, setBanner] = useState("");

  const data = {
    "id": user,
    "firstName": firstName,
    "lastName": lastName,
    "photo": photo,
    "banner": banner
}

  const handleUpdate = (e) => {
    e.preventDefault();
        axios.put('http://localhost:3000/api/user/update', {data: data},{
          mode: 'no-cors',
          headers:{
            //"Content-Type": 'multipart/form-data',
            "accept": "applicacation/json",
            "Authorization": token
          }
        })
        .then((response)=>{
            if (response.status === 200) {
                console.log(response);
            }                
        })
        window.location.reload();
       
  }
  return (
    <div className="update">
      <form id="update" className="update-form" onSubmit={handleUpdate}>
      <label className="htmlForm" id="firstName">Prénom</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <br/>
        <label className="htmlForm" id="lastName">Nom</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <br/>
        <label className="htmlForm" id="Photo">Photo de profile</label>
        <input
          type="file"
          id="Photo"
          name="Photo"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0].name)}
          file={photo}
        />
        <br/>
        <label className="htmlForm" id="Photo">Banniére</label>
        <input
          type="file"
          id="Banner"
          name="Banner"
          accept="image/*"
          onChange={(e) => setBanner(e.target.files[0].name)}
          file={banner}
        />
        <br/>
        <input type="submit" value="Modifier"  className="button"/>
        
      </form>
    </div>
  );
}
  
export default FormUpdate;