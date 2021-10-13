import React from "react";
import logoNav from "../../image/icon.svg";
import facebook from "../../image/icon-facebook.png";
import twitter from "../../image/icon-twitter.png";
import insta from "../../image/icon-insta.png";
import "./Footer.css"

function Footer (){



    return(
        <div className="footer">
            <div className="logo-footer">
                <img src={logoNav} className="logoFooter" alt="logo groupomania"/>
            </div>
            <div className="navItem">
            <div className="icon-not">
                        <img src={facebook} alt="logo Notification"/>
                </div>
                <div className="icon-not">
                    <button type="submit">
                        <img src={twitter} alt="logo Message"/>
                    </button>
                </div>
                <div className="icon-not">
                    <button type="submit" >
                        <img src={insta} alt="logo Déconnexion"/>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Footer;