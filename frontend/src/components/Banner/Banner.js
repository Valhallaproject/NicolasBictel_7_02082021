import React, {useState, useEffect} from "react";
import axios from 'axios';
import './Banner.css'

const Banner = () =>  {


    
    const [banner, setBanner] = useState()
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('accessToken');
    useEffect(() => {
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
        
    },)  
    const handleAddImage = () => {
        
    }

    return(
        
        <div className="banner">
            {banner}
            <button onclick={handleAddImage}>Ajouter une image</button>
        </div>
    )  
};
export default Banner