import React from "react";
import logoNav from "../../images/icon-left-font.png";
import iconHome from "../../images/icon-home.png";
import iconUser from "../../images/icon-user.png";
import iconNotif from "../../images/icon-notification.png";
import iconMessage from "../../images/icon-message.png";
import iconDeconnect from "../../images/icon-deconnect.png";
import '../../style/Header.css';

function Header (){



    return(
        <div className="nav">
            <div className="logo">
                <img src={logoNav} alt="logo groupomania"/>
            </div>
            <div className="navItem">
                <div className="icon-navItem">
                    <img src={iconHome} alt="logo Accueil"/>
                </div>
                <div className="icon-navItem">
                    <img src={iconUser} alt="logo Utilisateur"/>
                </div>
            </div>
            <div className="notification">
                <div className="icon-not">
                    <img src={iconNotif} alt="logo Notification"/>
                </div>
                <div className="icon-not">
                    <img src={iconMessage} alt="logo Message"/>
                </div>
                <div className="icon-not">
                    <img src={iconDeconnect} alt="logo Déconnexion"/>
                </div>
            </div>
        </div>
    )
};

export default Header;