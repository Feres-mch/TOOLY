import React, { Component } from "react";
import styled from "styled-components";

import bgImage from "../images/1.4.jpeg";
import logo from "../images/logo.png";
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';
import { useHistory } from "react-router-dom";
import "./signup.css";






    const SignUp3 = (props) => {

  
        let history = useHistory();
        let data=({
            firstname: props.location.state.firstname,
            lastname: props.location.state.lastname,
            username: props.location.state.username,
            password : props.location.state.password,
            tel : props.location.state.tel,
            email :  props.location.state.email,
            
            adresse:{
                state:props.location.state.adresse.state,
                city:props.location.state.adresse.city,
               street: props.location.state.adresse.street,
            },
           type:"client",
           verified:"true",

          });
        function Previous() {
          history.push("/SignUpPage2");
        }
        function fileselect (event) {
         
            const fileList = event.target.files;
            let reader = new FileReader();
            reader.readAsDataURL(fileList[0]);
            reader.onload=(event)=>{
                    console.warn(event.target.result);
            }
            
            
        }
        function signup(e) {
   
    
    
    
            e.preventDefault();
           
            alert(props.location.state.adresse.city);
            console.log("dkhalet lel fonction");
            axios.post("http://localhost:5000/api/users", data).then(resp => {
              alert(resp.data.message);
              console.log(resp.data.message);
              history.push("/SignInPage");
            }).catch(err => {
              console.log(err);
              console.log("ghalta");
            })
          }
        console.log(data)
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
                                    <span class="vertical-line2" style={{ color: "yellow" }}></span>
                                    <Icon.PersonCircle size={50} class="circle-icon-select " style={{ color: "white", }} />
                                    <span class="vertical-line2" style={{ color: "yellow" }}></span>
                                    <span class="vertical-line2" style={{ color: "yellow" }}></span>
                                    <Icon.Image size={50} class="circle-icon-select " style={{ color: "white", }} />
                                    <span class="vertical-line2" style={{ color: "yellow" }}></span>
                                </div>


                            </div>
                               {/*stepper */}
                            <br />
                            <div class="row ">

                                <div class=" offset-md-5 col-md-6">

                                    <h6>Personal photo :*</h6>
                                    <input id="pic" onChange={fileselect} name="input-file-1[]" multiple type="file"  />


                                </div>
                            </div>
                            <br />
                            <div class=" offset-md-6 col-md-6">
                                <h5> IDENTITY CARD</h5>
                            </div>

                            <div class="row ">

                                <div class=" offset-md-5 col-md-6">
                                    <div class="  col-md-1" style={{ display: "inline" }}>
                                        <h6 style={{ display: "inline" }}>Recto</h6>
                                    </div>
                                    <div class="offset-md-1  col-md-1" style={{ display: "inline" }}>
                                        <h6 style={{ display: "inline", marginLeft: "50px" }}>Verso</h6>
                                    </div>

                                </div>
                                <div class="input-group offset-md-5 col-md-4">
                                    <input id="cin-1" class="form-control" name="input-file-1[]" multiple type="file" accept="image/*" />
                                    <input id="cin-2" class="form-control" name="input-file-1[]" multiple type="file" accept="image/*" />
                                </div>
                            </div>



                            <br />
                            <div class="row ">

                                <div class=" offset-md-8 col-md-4">
                                    <input type="submit" name="submit" onClick={Previous} class="btn   login_btn btn-md" style={{ width: "150px", marginLeft: "5px" }} value="Previous" />
                                    <input type="submit" name="submit" onClick={signup} class="btn   login_btn btn-md" style={{ width: "150px", marginLeft: "5px" }} value="Finish" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>




            </>
        );
   
}

export default SignUp3;




