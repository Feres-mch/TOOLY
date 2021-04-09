import React, { Component } from "react";
import styled from "styled-components";

import bgImage from "../images/1.4.jpeg";
import logo from "../images/logo.png";

import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./siginin.css";
import image from '../images/1.4.jpeg';
import * as Icon from 'react-bootstrap-icons';
import { useHistory } from "react-router-dom";
  const SignIn = (props) => {
    const history = useHistory();
  function login () {


    let request = {
      email: document.getElementById("Email").value,
      password: document.getElementById("password").value

    }
    console.log("hahah")
    console.log( document.getElementById("Email").value);
    axios.post("http://localhost:5000/api/users/login", request).then(resp => {
      alert(resp.data.firstname);
      if (resp.data.firstname !="") {
        alert("welcom "+resp.data.firstname);
        console.log("3ak3ek");
        history.push({
          pathname: '/profil',
            state: resp.data // your data array of objects
        })
      }

    }).catch(err => {
      console.log(err);
      console.log("ghalta");
    })

  }

 



    return (
      <>

        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
              <div class="login d-flex align-items-center py-5">
                <div class="container">
                  <div class="row">
                    <div class="col-md-9 col-lg-8 mx-auto">
                      <h3 class="login-heading mb-4">Sign In!</h3>
                      <form >


                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">  <Icon.Envelope /></span>
                          </div>
                          <input type="text" id="Email" class="form-control" placeholder="Email address" aria-label="Email" aria-describedby="basic-addon1" />
                        </div>


                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">  <Icon.Lock /></span>
                          </div>
                          <input type="text"  id="password"class="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div class="text-center">
                          <a class="small" href="#">Forgot password?</a></div>
                        <button onClick={login} class="btn btn-lg  btn-block  text-uppercase font-weight-bold mb-2" style={{ backgroundColor: "#FFC312" }} type="submit">CONNECT</button>
                        <div class="text-center">
                          <a class="small" href="#"> Don't you have an account? let's make  one !!!</a></div>
                        <button class="btn btn-lg  btn-block btn-login text-uppercase font-weight-bold mb-2" style={{ backgroundColor: "black", color: "white" }} type="submit">CREATE AN ACCOUNT</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div class="container ">
            <div class="row">
            <div class="col-md-12 col-xl-12">
            <div class="col-md-7 col-xl-7">
            <img   src={image} style={{ height: "50rem" }} />
            </div>
            <div class="col-md-5 col-xl-5">
            <h2>sign in</h2>
            </div>
          </div>
            </div>
         

    </div>*/}


      </>
    );
  }



const Background = styled.div`
background-image:url(${bgImage});
background-position:left;
background-size:cover;
background-repeat : no-repeat;
width:100vw;
height:100vh;
display:flex;
align-items:center;

justify-content:center;
`;

export default SignIn;

