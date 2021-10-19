import React from "react";
import UpdatePhoto from './UpdatePhoto'

const updatePhoto = ({displayPhoto, hidePhoto}) => displayPhoto ? ( 
  
  <React.Fragment>
      <div className="contentUpdatePhoto">
        <div className="Update"> 
          <button className="close" onClick={hidePhoto}>X</button>
          <UpdatePhoto/>
        </div>
    </div>
  </React.Fragment>
  //}
) : null;
  
export default updatePhoto