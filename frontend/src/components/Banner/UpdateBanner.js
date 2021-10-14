import axios from "axios";
import React, { useState } from "react"; 

function UpdateBanner () { 
  const token = localStorage.getItem('accessToken'); 
  const user = JSON.parse(localStorage.getItem('user'));
  const [banner, setBanner] = useState();

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("id", user)
    data.append("photo", banner)

        axios.put('http://localhost:3000/api/user/updateBanner', data,{
          headers:{
            "Content-Type": 'multipart/form-data',
            "accept": "applicacation/json",
            "Authorization": token
          }
        })
        .then((response)=>console.log(response))
        window.location.reload();
  }
  return (
    <div className="update">
      <form  enctype="multipart/form-data"  id="update" className="update-form"  onSubmit={handleUpdate}>
    
        <label className="htmlForm" id="Banner" htmlFor="banner">Photo de banniére</label>
        <input
          type="file"
          id="banner"
          name="photo"
          accept="image/*"
          onChange={(e) => setBanner(e.target.files[0])}
        />
        <input type="submit" value="Modifier"  className="button"/>
      </form>
    </div>
  );
}
  
export default UpdateBanner;
