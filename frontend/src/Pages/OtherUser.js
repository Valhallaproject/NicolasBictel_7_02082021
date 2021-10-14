import React, {useState, useEffect} from "react";
import { useLocation} from 'react-router-dom'
import Header from "../containers/Headers/Header"
import axios from "axios";
import iconUser from "../image/icon-user.png"
import Logo from "../image/icon-left-font.png"
import '../style/profile.css'
import OtherUserPostList from "../containers/Posts/OtherUserPost/OtherUserPost";
import Footer from "../containers/Footer/Footer";

function OtherUser (props) { 
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('accessToken');
    const otherUser = useLocation()
    const userId = otherUser.state
    console.log(userId);
    if(userId !== undefined){
         localStorage.setItem("userId", JSON.stringify(userId))
    }
   
    const UserId = JSON.parse(localStorage.getItem("userId"))


    if(user === userId){
        window.location = "/Profile"
    }

    //Récupération des infos utilisateur
    const [userName, setUserName] = useState();
    const [photo, setPhoto] = useState();
    const [banner, setBanner] = useState();
    useEffect(() => {
        axios.get('http://localhost:3000/api/user/userId', {
            params:{
                id: UserId
            }
        },{ 
            headers : {
                "Content-Type": 'application/json',
                "Authorization": token
                
            },
        })
        .then((response) =>{
            let photoUser = response.data.photo;
            let bannerUser = response.data.banner
            let firstName = response.data.firstName;
            let lastName = response.data.lastName;
            setUserName(firstName + " " + lastName)
            if(photoUser === null){
                setPhoto(iconUser)
            }else{
                setPhoto(photoUser)
            }
            if(bannerUser === null){
                setBanner(Logo)
            }else{
                setBanner(bannerUser)
            }
        })
    },[token, UserId]);

    //récupération des posts utilisateur
    const [ userPosts, setUserPosts] = useState([]);
    useEffect(() => {    
        axios.get('http://localhost:3000/api/post/userPost',{
            params: {
                userId: UserId
            }
        },{
            headers:{
                "Content-Type": 'application/json',
                "Authorization":  token
            }
        })
            .then((response) => {
                setUserPosts(response.data)
            })
        },[token, UserId]);
    return(
        <div> 
            <div className="header">
                <Header/>
            </div >
            <div className="headProfile">
                <div className="headBanner banner">
                    <img src={banner} alt=""/>
                </div>
                <div className="headPhoto photoProfile">
                    <img src={photo} alt=""/>
                </div>
            </div>
            <div>
                <p className="userName">{userName}</p>
            </div>
            <div className="feedUser">
                {userPosts ? <OtherUserPostList posts={userPosts} /> : userPosts}
            </div>
            
            <Footer/>
            
        </div>
    ) 
    
};
export default OtherUser