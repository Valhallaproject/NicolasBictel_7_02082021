import React, {useState, useEffect} from "react";
import Header from "../containers/Headers/Header"
import axios from "axios";
import PhotoProfile from "../components/Photos/Photo-profile";
import Banner from "../components/Banner/Banner"
import '../style/profile.css'
import LogiqueDelete from "../containers/DeleteProfile/LogiqueDelete";
import DeleteProfile from "../containers/DeleteProfile/DeleteModal";
import LogiqueUpdate from "../containers/UpdateProfile/LogiqueUpdate";
import UpdateProfile from "../containers/UpdateProfile/UpdateModal";


function Profile () { 
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('accessToken');
    
    const [userName, setUserName] = useState()

    useEffect(() => {
        axios.get('http://localhost:3000/api/user/userId', {
            params:{
                id: user
            }
        },{ 
            headers : {
                "Content-Type": 'application/json',
                "Authorization": token
                
            },
        })
        .then((response) =>{
            console.log(response);
            let firstName = response.data.firstName;
            let lastName = response.data.lastName;
            setUserName(firstName + " " + lastName)
            
        })
    },[token, user]);

    const {displayDelete, toggleDelete} = LogiqueDelete();
    const {displayUpdate, toggleUpdate} = LogiqueUpdate();

    return(
        <div>  
            <DeleteProfile
                displayDelete={displayDelete}
                hideDelete={toggleDelete}
            />      
            <UpdateProfile
                displayUpdate={displayUpdate}
                hideUpdate={toggleUpdate}
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
                    className="DelProfile"
                    onClick={toggleDelete}
                >
                    Supprimer mon Profile
                </button>
                <button
                    className="ModProfile"
                    onClick={toggleUpdate}
                >
                    Modifier mon profile
                </button>
            </div>
        </div>
    ) 
    
};
export default Profile

