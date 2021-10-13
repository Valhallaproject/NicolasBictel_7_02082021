import axios from "axios";
import React, { useState } from "react"; 

function UpdatePhoto () { 
  const token = localStorage.getItem('accessToken'); 
  const user = JSON.parse(localStorage.getItem('user'));
  const [photo, setPhoto] = useState();

  
    const handleUpdate = async (e) =>  {
    e.preventDefault();
    
    const data = new FormData();
    data.append("id", user)
    data.append("photo", photo)
    console.log(photo);

        await axios.put('http://localhost:3000/api/user/updatePhoto', data,{
          headers:{
            "Content-Type": 'multipart/form-data',
            "accept": "applicacation/json",
            "Authorization": token
          }
        })
        .then((response)=>console.log(response))
        //window.location.reload();
  }
  

  
  return (
    <div className="update">
      <form  enctype="multipart/form-data"  id="update" className="update-form" onSubmit={handleUpdate} >
      <label className="htmlForm" id="Photo" htmlFor="Photo">Photo de profile</label>
          <input
            type="file"
            id="Photo"
            name="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        <input type="submit" value="Modifier"  className="button"/>
        
      </form>
    </div>
  );
}
  
export default UpdatePhoto;