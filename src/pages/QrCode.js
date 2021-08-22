import React from "react";
import"./popup.css"
import axios from 'axios';
import { useHistory } from "react-router-dom";
import QRcode from "react-qr-code";

import {
    
    Image,
    Button,
  
  
  } from "react-bootstrap";
const  QrCode  = (props) => {
    const history = useHistory();
    
    
return(props.trigger)?(
<div className="popup">
    <div className="popup-inner2">
      <div>
        <button className="close-btn" style={{ backgroundColor: "rgba(0,0,0,0.0)", paddingLeft:"20px" , borderStyle: "none"}} onClick={()=>props.setTrigger(false)}> X</button>
       
        <hr/>
        <br/>
        <div class="row">
                        <div class=" offset-md-4 col-md-6">
                          <QRcode value={props.children}
                            size={140}
                            level="H"
                            includeMargin={true}

                          />
                        </div>

                      </div>
        <hr/>
        <br/>
        </div>
       </div>
</div>
) : "";
}
export default QrCode