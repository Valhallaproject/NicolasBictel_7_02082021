import React from "react";
import './Update.css';
import FormUpdate from './FormUpdate'



const updateProfile = ({displayUpdate, hideUpdate}) => displayUpdate ? ( 
  
  <React.Fragment>
      <div className="contentUpdate">
        <div className="Update"> 
          <button className="close" onClick={hideUpdate}>X</button>
          <h1>Modifier mon profile</h1><br/><br/><br/><br/><br/><br/>
          <FormUpdate/>
        </div>
      </div>
  </React.Fragment>
  //}
) : null;
  
export default updateProfile