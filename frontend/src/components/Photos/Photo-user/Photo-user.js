import React, { useState, useEffect } from "react";
import axios from 'axios';
import iconUser from "../../../image/icon-user.png"
import './Photouser.css';

function PhotoUser () {
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem('user'));
    const [ users, setUsers ] = useState();

    useEffect(() => {
        axios.get('http://localhost:3001/api/user/userId',{
            params:{
                id : user} 
        },{
            headers:{
                "Content-Type": 'application/json',
                "Authorization": token
            }
        })
        .then((response) =>{
            if(response.data.photo === null){
                setUsers(iconUser)
            }else{
                const photo = response.data.photo
                console.log(response.data.photo);
                setUsers(photo);
            }
        })
    },[token, user]);

    return(
        <img className="photoUser" src={users} alt="profile"/>
    )  
};
export default PhotoUser