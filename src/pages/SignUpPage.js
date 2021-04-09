import React, { Component } from "react";
import styled from "styled-components";

import bgImage from "../images/1.4.jpeg";
import logo from "../images/logo.png";
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';
import SignUpPage2 from'./SignUpPage2';
import "./signup.css";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";


const SignUp = (props) => {

 
  const history = useHistory();
  function  Next(e)  {

    e.preventDefault();
   
    let data=({
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      username: document.getElementById("username").value,
      password : document.getElementById("password").value,
    });
    alert( document.getElementById("password").value,);
    alert( data.password);
    if(document.getElementById("conf_password").value==data.password){
      
     history.push({
        pathname: '/SignUpPage2',
          state: data // your data array of objects
      })
    }else{
      alert("password != confirme password");
    }
  
  }
    return (
      <>

        <div class="padding">
          <div class="row container d-flex justify-content-center">
            <div class="col-md-12 col-xl-12">
              <div class="row">
                <div class=" offset-md-6 col-md-6">
                  <h2 style={{ color: "yellow" }}>SIGN UP</h2>
                </div>
              </div>
              {/*stepper */}
              <div class="col-md-12">
                <div class="offset-md-4 col-md-8">
                  {/*<span class="vertical-line2"></span> <Icon.Unlock size={50} style={{  borderRadius: "50%",  backgroundColor:"yellow",color: "white", }} /> <span class="vertical-line2" ></span> <Icon.FileLock2 size={60} style={{ color: "yellow", }} />  <span class="vertical-line2" ></span>  <Icon.user size={60} style={{ color: "yellow", }} /> */}
                  <span class="vertical-line2" style={{ color: "yellow" }}></span>
                  <Icon.Unlock size={60} class="circle-icon-select " style={{ color: "white", }} />
                  <span class="vertical-line2" style={{ color: "yellow" }} />
                  <span class="vertical-line2" style={{ color: "grey" }}></span>
                  <Icon.PersonCircle size={50} class="circle-icon " style={{ color: "white", }} />
                  <span class="vertical-line2" style={{ color: "grey" }}></span>
                  <span class="vertical-line2" style={{ color: "grey" }}></span>
                  <Icon.Image size={50} class="circle-icon " style={{ color: "white", }} />
                  <span class="vertical-line2" style={{ color: "grey" }}></span>
                </div>


              </div>
              {/*stepper */}
              <br />
              <div class="row ">

                <div class=" offset-md-5 col-md-6">

                  <h6>firstname :*</h6>
                  <input type="text" id="firstname" class="form-control" placeholder="firstname" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />


                </div>
              </div>
              <div class="row ">

                <div class=" offset-md-5 col-md-6">
                  <h6>Last Name :*</h6>
                  <input type="text" id="lastname" class="form-control" placeholder="lastname" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </div>
              <div class="row ">

                <div class=" offset-md-5 col-md-6">
                  <h6>Username :*</h6>
                  <input type="text" id="username" class="form-control" placeholder="username" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </div>
              <div class="row ">

                <div class=" offset-md-5 col-md-6">
                  <h6>password :*</h6>
                  <input type="text" id="password" class="form-control" placeholder="password" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </div>
              <div class="row ">

                <div class=" offset-md-5 col-md-6">
                  <h6>confirm password :*</h6>
                  <input type="text" id="conf_password" class="form-control" placeholder="confirm password" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </div>
              <br />
              <div class="row ">

                <div class=" offset-md-8 col-md-4">
                 
                  
                    <input type="submit" onClick={Next} name="submit" class="btn   login_btn btn-md" style={{ width: "250px", marginLeft: "5px" }} value="Next" />
                   
                </div>
              </div>

            </div>
          </div>
        </div>




      </>
    );
    
  }
  




export default SignUp;





