import React, { useState, useEffect }  from "react";
import axios from 'axios';
import './Photo-profile.css';
 

function PhotoProfile () {
    const token = localStorage.getItem("accessToken");
    const user = (localStorage.getItem('user'));
    const [ users, setUsers ] = useState();
    
    useEffect(() => {
         axios.get('http://localhost:3000/api/user/userId', {
                params:{
                    id : user
                } 
            },
            { 
                headers:{
                    "Content-Type": 'application/json',
                    "Authorization": token
                } 
            }
        )
        .then((response) =>{
            if(response.data.photo === null){
                console.log(response.data.firstName);
                setUsers(response.data.firstName[0]); 
            }else{
                setUsers(response.data.photo)
            }
                              
            
            
        })
    },[token, user]);
    return(
        <p className="photoProfile" >{users}</p>
    )  
};
export default PhotoProfile