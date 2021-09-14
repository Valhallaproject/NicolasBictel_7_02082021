import React from "react";
import './Delete.css';
import FormUpdate from './FormDelete'



const UpdateProfile = ({display, hide}) => display ? ( 
 

  
  
  <React.Fragment>
      <div className="contentUpdate">
        <div className="Update"> 
          <button className="close" onClick={hide}>X</button>
          <h1>Supprimer mon profile</h1><br/><br/><br/><br/>
          <FormUpdate/>
        </div>
      </div>
  </React.Fragment>
  //}
) : null;

  
export default UpdateProfile