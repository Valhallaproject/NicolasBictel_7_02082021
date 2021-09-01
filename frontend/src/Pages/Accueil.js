import React from "react";
import Header from "../containers/Headers/Header"
import Publication from "../containers/Posts/Post-home.js"
import '../containers/Posts/Post-home.css';


function Accueil  () {
    
    return(
        <div> 
            <div className="header">
                <Header/>
            </div>
            <div className="publi">
                <Publication/>
            </div>
        </div>
        
    )  
};

export default Accueil;