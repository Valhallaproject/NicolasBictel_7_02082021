import React, {useState, useEffect} from "react";
import axios from 'axios';
import './Banner.css'

const Banner = () =>  {
    
    const [banner, setBanner] = useState()
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('accessToken');
    useEffect(() => {
        axios.get('http://localhost:3000/api/user/userId',{
            params: {
                id: user
            }
        },{ 
            headers : {
                "Content-Type": 'application/json',
                "Authorization": token
            },
        })
        .then((response) =>{
                    let banner= response.data.banner;
                    setBanner(banner)
        })
        
    },[token, user]); 

    return(
        
        <div className="banner">
            {banner}
        </div>
    )  
};
export default Banner