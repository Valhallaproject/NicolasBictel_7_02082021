import React, {useState} from "react";
import logo from "../image/icon-white.png";
import Login from "../containers/Log/Login";
import SignUp from "../containers/Log/SignUp";
import logoMobile from '../image/icon-black.png'
import '../style/Log.css';

function Log(props) {
  const [signUpModal, setSignUpModal] = useState(null);
  const [loginModal, LoginModal] = useState(true);
  const [register, setRegister] = useState(true);
  const [login, setLogin] = useState(null);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      LoginModal(null);
      setSignUpModal(true);
      setRegister(null);
      setLogin(true);
    } else if (e.target.id === "login") {
      setSignUpModal(null);
      LoginModal(true);
      setRegister(true);
      setLogin(null);
    }
  };
    return (
      <div className="home">
        <div className="content">
          <div className="title">
            <img src={logo} className="logo" alt="logo groupomania"/><br/><br/>
            <h1>Bienvenue sur votre réseau social d'entreprise</h1>
           </div>
          </div>
        <div className="contenu">
          <div className="container">
            <img src={logoMobile} className="logoMobile" alt="logo groupomania"/>
            {signUpModal && <SignUp />}
            {loginModal && <Login />}
          </div>
          <div className="forget">
            <ul>
              <li
                onClick={handleModals}
                id="login"
                className={{signUpModal} > {register} ? register : null}
              >
              {register && "Mot de passe oublié ?  -"}
              </li>
              <li
                onClick={handleModals}
                id="register"
                className={{signUpModal} > {register} ? register : null}
              >
                {register && "S'inscrire à Groupomania"}
              </li>
              <li
                onClick={handleModals}
                id="login"
                className={{loginModal} > {login} ? login: null }
              >
                {login && "Se connecter"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )   
};

export default Log;