import React from "react";
import "./popup.css"
import axios from 'axios';
import { useHistory } from "react-router-dom";

import {

  Image,
  Button,


} from "react-bootstrap";
const UserRequestDetails = (props) => {
  const history = useHistory();
  function acceptuser(email) {

    axios.put("http://localhost:5000/api/users/acceptRequest/" + email).then(resp => {
      props.setTrigger(false)
      axios.get("http://localhost:5000/api/users/request").then(resp => {



        history.push({
          pathname: '/userRequest',
          state: resp // your data array of objects
        });
      }).catch(err => {
        console.log(err);
      })

    }).catch(err => {
      console.log(err);
    })


    alert(email)

  };


  return (props.trigger) ? (

    <>




      <div className="popup">
        <div className="popup-inner2">
          <button className="close-btn" onClick={() => props.setTrigger(false)}> close</button>
          
        
          <div class="page-content page-container" id="page-content"  style={{paddingRight:"2cm"}}>
        <div class="padding">
          <div class="row container d-flex ">
            <div class="col-xl-6 col-md-12">
              <div class="card-userRequest user-card-full">
                <div class="row m-l-0 m-r-0">
                  <div class="col-sm-4 bg-c-lite-green user-profile" style={{ minWidth: "18cm" }}>
                    <div class="card-block text-center text-white">

                      <div class="m-b-25"> <img src={props.children.images.profileImage} class="img-radius" alt="User-Profile-Image" /> </div>
                      <h6 class="f-w-600">{props.children.userName}</h6>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="card-block  align-items-center text-center" >
                      <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">UserName</p>
                          <h6 class="text-muted f-w-400">{props.children.userName}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">FirstName</p>
                          <h6 class="text-muted f-w-400">{props.children.firstName}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">LastName</p>
                          <h6 class="text-muted f-w-400">{props.children.lastName}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Email</p>
                          <h6 class="text-muted f-w-400">{props.children.email}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">PhoneNumber</p>
                          <h6 class="text-muted f-w-400">{props.children.phoneNumber}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Address</p>
                          <h6 class="text-muted f-w-400">{props.children.address.state + " , " + props.children.address.city + " , " + props.children.address.street}</h6>
                        </div>

                      </div>

                      <div>
                        cin : <img src={props.children.images.firstVerificationImage} roundedCircle className="image1" />

                        <img src={props.children.images.secondVerificationImage} roundedCircle className="image1" />
                      </div>
                      <Button variant="warning" onClick={() => acceptuser(props.children.email)} className="border border-dark btn-block">
                        Accepte
                        </Button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  ) : "";

}
export default UserRequestDetails