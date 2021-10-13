import React, { useState, useEffect }  from "react";
import axios from 'axios';
import addImage from "../../../image/addImage.png"
import './Photo-profile.css';
import LogiquePhoto from "./LogiquePhoto";
import UpdatePhoto from "./PhotoModale";
 
const PhotoProfile = () => {

    const token = localStorage.getItem("accessToken");
    const user = (localStorage.getItem('user'));
    const [ photoProfile, setPhoto] = useState();
    useEffect(() => {
         axios.get('http://localhost:3000/api/user/userId', {
                params:{
                    id : user
                } 
            },
            { 
                headers:{
                    "Content-Type": 'application/json',
                    "Authorization": token
                } 
            }
        )
        .then((response) =>{
            if(response.data.photo === null){
                const image = addImage
                setPhoto(image); 
            }else{
                const photo = response.data.photo
                console.log(response.data.photo);
                setPhoto(photo);
                console.log(photo);
            };
        })
    },[token, user]);

    const {displayPhoto, togglePhoto} = LogiquePhoto();
    return(
        <div className="photoProfile">
            <UpdatePhoto
                displayPhoto={displayPhoto}
                hidePhoto={togglePhoto}
            />
            <img   src={photoProfile} alt="utilisateur"onClick={togglePhoto}/>
        </div>
    )  
};
export default PhotoProfile

//       
//