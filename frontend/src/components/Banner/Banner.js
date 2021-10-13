import React, {useState, useEffect} from "react";
import axios from 'axios';
import addImage from "../../image/icon-left-font.png"
import './Banner.css'
import LogiqueBanner from "./LogiqueBanner";
import UpdateBanner from "./BannerModale";

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
            if(response.data.banner === null){
                const image = addImage
                setBanner(image); 
            }else{
                const photo = response.data.banner
                console.log(response.data.banner);
                setBanner(photo);
                console.log(photo);
            };
        })
        
    },[token, user]); 

    const {displayBanner, toggleBanner} = LogiqueBanner();
    return(
        <div className="banner">
            <UpdateBanner
                displayBanner={displayBanner}
                hideBanner={toggleBanner}
            />
            <img onClick={toggleBanner} src={banner} alt="utilisateur"/>
        </div>
    )  
};
export default Banner