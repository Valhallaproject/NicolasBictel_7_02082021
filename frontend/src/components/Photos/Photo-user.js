import React from "react";
import axios from 'axios';
import './Photouser.css';

function photoUser () {
    const user = JSON.parse(localStorage.getItem('user'));
    axios.get('http://localhost:3000/api/user/allUser')
         .then((response) =>{
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].id === user) {
                    let name = response.data[i].firstName;
                    document.querySelector('.photoUser').innerHTML = name[0]
                }
            } 
        })
    
       

    return(
        <p className="photoUser"></p>
    )  
};
export default photoUser