import React from "react";
import './Photouser.css';


function photoUser () {
    let userStorage = JSON.parse(localStorage.getItem("userData"));
    let user = userStorage.userId;
   
    fetch("http://localhost:3000/api/user/userId")
    
    .then((reponse) => reponse.json(user))
    .then((reponse) =>{
        for (let i = 0; i < reponse.length; i++) {
            if (user === reponse[i].id){ 
            let letter = reponse[i].firstName
            
            for (let i = 0; i < letter.length; i++) {
               let firstLetter = letter[0] 
               document.querySelector('.photoUser').innerHTML = firstLetter
                
            } 
        }}
    });
     
    
    return(
        <p className="photoUser"></p>
    ) 
};

export default photoUser