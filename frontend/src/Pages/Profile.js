import React, {useState} from "react";
import Header from "../containers/Headers/Header"
import axios from "axios";
import PhotoProfile from "../components/Photos/Photo-profile";
import Banner from "../components/Banner/Banner"
import '../style/profile.css'
import LogiqueDelete from "../containers/DeleteProfile/LogiqueDelete";
import DeleteProfile from "../containers/DeleteProfile/DeleteModal";


function Profile () { 
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('accessToken');
    
    const [userName, setUserName] = useState()
    axios.get('http://localhost:3000/api/user/allUser', {
        headers : {
            "Content-Type": 'application/json',
            "Authorization": token
            
        },
    })
    .then((response) =>{
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].id === user) {
                let firstName = response.data[i].firstName;
                let lastName = response.data[i].lastName;
                setUserName(firstName + " " + lastName)
            }
        } 
    })
    const {display, toggle} = LogiqueDelete();

    return(
        <div>  
            <DeleteProfile
                display={display}
                hide={toggle}
            />      
            <div className="header">
                <Header/>
            </div >
            <div className="headProfile">
                <div className="headBanner">
                    <Banner/>
                </div>
                <div className="headPhoto">
                    <PhotoProfile/>
                </div>
            </div>
            <div>
                <p className="userName">{userName}</p>
            </div>
            <div className="button">
                <button
                    className="ModProfile"
                    onClick={toggle}
                >
                    Supprimer mon Profile
                </button>
            </div>
        </div>
    ) 
    
};
export default Profile

