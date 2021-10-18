import React from "react";
import Header from "../containers/Headers/Header"
import Footer from "../containers/Footer/Footer"
import Publication from "../containers/Posts/AllPosts/AddPost.js"
import AllPost from "../containers/Posts//AllPosts/AllPost"


function Accueil  () {

    const user = JSON.parse(localStorage.getItem('user'));
    
    console.log(user);
    if (user === null) {
        window.location = "/Log"
    }

    return(
        <div> 
            <div className="header">
                <Header/>
            </div>
            <div className="publi">
                <Publication/>
                <AllPost/>
            </div>
                <Footer/>
        </div>
    )  
};

export default Accueil;