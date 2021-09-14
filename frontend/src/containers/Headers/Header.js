import React from "react";
import TokenService from "../../services/token.service";
import logoNav from "../../images/icon-left-font.png";
import iconHome from "../../images/icon-home.png";
import iconUser from "../../images/icon-user.png";
import iconNotif from "../../images/icon-notification.png";
import iconMessage from "../../images/icon-message.png";
import iconDeconnect from "../../images/icon-deconnect.png";
import './Header.css';

function Header (){
    const handleHome = () => {
        window.location= "/"
    }
    const handleProfile = () => {
        window.location= "/Profile"
    }
    const logout = () => {
        TokenService.removeUser();
        window.location = "/Log"
      }



    return(
        <div className="nav">
            <div className="logo-header">
                <img src={logoNav} alt="logo groupomania"/>
            </div>
            <div className="navItem">
                <div className="icon-navItem"> 
                    <button type="submit" onClick={handleHome}>
                        <img src={iconHome} alt="logo Accueil" />
                    </button>
                </div>
                <div className="icon-navItem">
                    <button type="submit" onClick={handleProfile}>
                        <img src={iconUser} alt="logo Utilisateur"/>
                    </button>
                </div>
            </div>
            <div className="notification">
                <div className="icon-not">
                    <button type="submit">
                        <img src={iconNotif} alt="logo Notification"/>
                    </button>
                </div>
                <div className="icon-not">
                    <button type="submit">
                        <img src={iconMessage} alt="logo Message"/>
                    </button>
                </div>
                <div className="icon-not">
                    <button type="submit" onClick={logout}>
                        <img src={iconDeconnect} alt="logo Déconnexion"/>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Header;