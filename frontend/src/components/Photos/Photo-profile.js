import React from "react";
import axios from 'axios';
import './Photo-profile.css';

function PhotoProfile () {
    const user = JSON.parse(localStorage.getItem('user'));
    //ApiUser.getAllUser
axios.get('http://localhost:3000/api/user/allUser')
         .then((response) =>{
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].id === user) {
                    let name = response.data[i].firstName;
                    document.querySelector('.photoProfile').innerHTML = name[0]
                }
            } 
        })
    
       

    return(
        <p className="photoProfile"></p>
    )  
};
export default PhotoProfile