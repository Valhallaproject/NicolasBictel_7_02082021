import React, {useState} from "react";
import axios from 'axios';
import './Banner.css'

function Banner () {
    const [banner, setBanner] = useState()
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('accessToken');
    axios.get('http://localhost:3000/api/user/allUser',{
        headers : {
            "Content-Type": 'application/json',
            "Authorization": token
        },
    })
    .then((response) =>{
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].id === user) {
                let banner= response.data[i].banner;
                setBanner(banner)
            }
        } 
    })
    
       

    return(
        
        <div className="banner">{banner}</div>
    )  
};
export default Banner