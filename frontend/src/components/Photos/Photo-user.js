import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Photouser.css';

function PhotoUser () {
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem('user'));
    const [ users, setUsers ] = useState();

    useEffect(() => {
        axios.get('http://localhost:3000/api/user/userId',{
            params:{
                id : user} 
        },{
            headers:{
                "Content-Type": 'application/json',
                "Authorization": token
            }
        })
        .then((response) =>{
                setUsers(response.data.firstName[0])
        })
    },[token, user]);

    return(
        <p className="photoUser" >{users}</p>
    )  
};
export default PhotoUser