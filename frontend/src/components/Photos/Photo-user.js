import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Photouser.css';

function PhotoUser () {
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem('user'));
    const [ users, setUsers ] = useState();
    const [ key, setKey] = useState();

    useEffect(() => {
        axios.get('http://localhost:3000/api/user/allUser',{
            headers:{
                "Content-Type": 'application/json',
                "Authorization": token
            }
        })
        .then((response) =>{
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].id === user) {
                setKey(response.data[i].id)
                setUsers(response.data[i].firstName[0])
                console.log(response.data[i].firstName[0])
                }
            }
        })
    },[token, user]);

    return(
        <p className="photoUser" key={key}>{users}</p>
    )  
};
export default PhotoUser