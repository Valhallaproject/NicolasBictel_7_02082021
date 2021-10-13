import React from "react";
import TokenService from "../../services/token.service";
import logoNav from "../../image/icon-left-font.png";
import logoMobile from "../../image/icon.svg";
import iconHome from "../../image/icon-home.png";
import iconUser from "../../image/icon-user.png";
import iconDeconnect from "../../image/icon-deconnect.png";
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
                <img src={logoNav} className="logoDesktop" alt="logo groupomania"/>
                <img src={logoMobile} className="logoMobile" alt="logo groupomania"/>
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
                    <button type="submit" onClick={logout}>
                        <img src={iconDeconnect} alt="logo Déconnexion"/>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Header;