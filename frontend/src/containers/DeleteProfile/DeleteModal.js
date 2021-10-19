import React from "react";
import './Delete.css';
import FormDelete from './FormDelete'

const deleteProfile = ({displayDelete, hideDelete}) => displayDelete ? ( 
  <React.Fragment>
      <div className="contentDelete">
        <div className="Delete"> 
          <button className="close" onClick={hideDelete}>X</button>
          <h1>Supprimer mon profile</h1><br/><br/><br/><br/><br/><br/>
          <FormDelete/>
        </div>
      </div>
  </React.Fragment>
  //}
) : null;
  
export default deleteProfile