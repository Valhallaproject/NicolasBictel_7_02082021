import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Log from './Pages/Log';
import Accueil from './Pages/Accueil';
import Profile from './Pages/Profile'
import axios from 'axios';


function App() {

  const instance = axios.create({
    baseURL : 'http://localhost:3001/api/user',
    headers : {
        "Content-Type": "application/json",
        
    },
  });

function getLocalAccessToken() {
    const accessToken = window.localStorage.getItem("accessToken");
    return accessToken;
  }
  
// Add a request interceptor
instance.interceptors.request.use((config) => { 
  const token = getLocalAccessToken();
  if (token) {
    config.headers["Authorization"] = token;
  }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  
});



//Add a response interceptor

instance.interceptors.response.use((res) => {
  console.log(res)
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
      }

    return Promise.reject(err);
})

  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Accueil}/>
        <Route path="/Log" component={Log}/>
        <Route path="/Profile" component={Profile}/>
      </Switch>
    </Router>
  )

  }
export default App;
