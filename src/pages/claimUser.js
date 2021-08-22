import React from "react";
import "./popup.css"
import axios from 'axios';
import { useHistory } from "react-router-dom";

import {

    Image,
    Button,


} from "react-bootstrap";
const ClaimUser = (props) => {
    const history = useHistory();


function Claim(){
  
      let request = ({
        userId:props.children._id,
        description:document.getElementById("claim").value,
      });
        axios.post("http://localhost:5000/api/users/claimUser",request).then(resp => {
          
           
            
            console.log(request.userId);
          }).catch(err => {
            console.log(err);
          })
      
          props.setTrigger(false)

  };

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <textarea  className="form-control" id="claim" name="story"
                    rows="5" cols="33">
                   
                </textarea>
                <Button variant="warning" onClick={()=>Claim()} className="border border-dark btn-block">
                    Accepte
                </Button>
            </div>
        </div>
    ) : "";
}
export default ClaimUser