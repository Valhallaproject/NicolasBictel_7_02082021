import React from "react";
import axios from 'axios';
import './Banner.css'

function Banner () {
    const user = JSON.parse(localStorage.getItem('user'));
    //ApiUser.getAllUser
axios.get('http://localhost:3000/api/user/allUser')
         .then((response) =>{
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].id === user) {
                    let banner= response.data[i].banner;
                    document.querySelector('.banner').innerHTML = banner
                }
            } 
        })
    
       

    return(
        
        <div className="banner"></div>
    )  
};
export default Banner