import React from "react";
import UpdateBanner from './UpdateBanner'



const updateBanner = ({displayBanner, hideBanner}) => displayBanner ? ( 
  
  <React.Fragment>
      <div className="contentUpdateBanner">
        <div className="Update"> 
          <button className="close" onClick={hideBanner}>X</button>
          <UpdateBanner/>
        </div>
    </div>
  </React.Fragment>
  //}
) : null;
  
export default updateBanner