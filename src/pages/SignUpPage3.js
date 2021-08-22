import React from "react";

import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';
import { useHistory } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';
import "./signup.css";






const SignUp3 = (props) => {

   let  picture = localStorage.getItem('image');
   console.log(props.location.state.address.postalCode)
    let history = useHistory();
    let data;
    function Previous() {
        history.push("/SignUpPage2");
    }

    let profilepic="null";
    let cinpic1;
    let cinpic2;
    let robotTest = "false";
   
    function fileselect(event) {

        let filename = event.target.name
        const fileList = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(fileList[0]);
        reader.onload = (event) => {
            
            if (filename === 'profilpic') {
                
                profilepic = event.target.result;
               
            }
            if (filename === 'cin1') {
                
                cinpic1 = event.target.result;
              
            }
            if (filename === 'cin2') {
              
                cinpic2 = event.target.result;
               
            }

        }

    

    }


    function signup(e) {
        console.log("robo " + robotTest)
        console.log(profilepic);
        if (profilepic ==="null" ){
            profilepic=picture;
      

        }
        console.log(profilepic);
        if (robotTest === "false") {
            alert("you have to  pass by robo test")
        } else {
            alert("you are not a  robot")
            e.preventDefault();
            const idcin = document.getElementById("idcin").value;
            data = ({
                firstname: props.location.state.firstname,
                lastname: props.location.state.lastname,
                username: props.location.state.username,
                password: props.location.state.password,
                tel: props.location.state.tel,
                email: props.location.state.email,
                birthDate: props.location.state.birthDate,

                address: {
                    state: props.location.state.address.state,
                    city: props.location.state.address.city,
                    street: props.location.state.address.street,
                    postalCode: props.location.state.address.postalCode,
                },
                type: "client",
                verified: "false",
                images: {
                    
                    profileImage: profilepic,
                },
                identityCard: idcin,
                images: {
                    profileImage: profilepic,
                    firstVerificationImage: cinpic1,
                    secondVerificationImage: cinpic2,
                },
            });


            axios.post("http://localhost:5000/api/users", data).then(resp => {
                history.push("/SignInPage");
            }).catch(err => {
                console.log(err);
            })
        }
    }

    function onChange(value) {
        console.log("captcha value ", value)
        robotTest = value;
    }
    return (
        <>

            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-md-12 col-xl-12">
                        <div className="row">
                            <div className=" offset-md-6 col-md-6">
                                <h2 style={{ color: "yellow" }}>SIGN UP</h2>
                            </div>
                        </div>
                        {/*stepper */}
                        <div className="col-md-12">
                            <div className="offset-md-4 col-md-8">
                                {/*<span className="vertical-line2"></span> <Icon.Unlock size={50} style={{  borderRadius: "50%",  backgroundColor:"yellow",color: "white", }} /> <span className="vertical-line2" ></span> <Icon.FileLock2 size={60} style={{ color: "yellow", }} />  <span className="vertical-line2" ></span>  <Icon.user size={60} style={{ color: "yellow", }} /> */}
                                <span className="vertical-line2" style={{ color: "yellow" }}></span>
                                <Icon.Unlock size={60} className="circle-icon-select " style={{ color: "white", }} />
                                <span className="vertical-line2" style={{ color: "yellow" }} />
                                <span className="vertical-line2" style={{ color: "yellow" }}></span>
                                <Icon.PersonCircle size={50} className="circle-icon-select " style={{ color: "white", }} />
                                <span className="vertical-line2" style={{ color: "yellow" }}></span>
                                <span className="vertical-line2" style={{ color: "yellow" }}></span>
                                <Icon.Image size={50} className="circle-icon-select " style={{ color: "white", }} />
                                <span className="vertical-line2" style={{ color: "yellow" }}></span>
                            </div>


                        </div>
                        {/*stepper */}
                        <br />
                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">

                                <h6>Personal photo :*</h6>
                                <input id="fileItem" onChange={fileselect} className="form-control" name="profilpic" multiple type="file" />


                            </div>
                        </div>
                        <br />
                        <div className=" offset-md-6 col-md-6">
                            <h5> IDENTITY CARD</h5>
                        </div>

                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">
                                <h6 style={{ display: "inline" }}>Recto</h6>
                                <input id="cin-1" onChange={fileselect} className="form-control" name="cin1" multiple type="file" accept="image/*" />

                            </div>

                            <div className=" offset-md-5 col-md-6">
                                <h6 style={{ display: "inline",  }}>Verso</h6>
                                <input id="cin-2" onChange={fileselect} className="form-control" name="cin2" multiple type="file" accept="image/*" />
                            </div>
                        </div>

                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">

                                <h6>identityCard number :*</h6>
                                <input id="idcin" name="idcin" className="form-control" multiple type="text" />


                            </div>
                        </div>

                        <br />
                        <div className="row ">

                            <div className=" offset-md-8 col-md-4">
                                <input type="submit" name="submit" onClick={Previous} className="btn   login_btn btn-md" style={{ width: "150px", marginLeft: "5px" }} value="Previous" />
                                <input type="submit" name="submit" onClick={signup} className="btn   login_btn btn-md" style={{ width: "150px", marginLeft: "5px" }} value="Finish" />
                            </div>
                            <ReCAPTCHA
                                sitekey="6LfNKqgaAAAAAIMR_Zk-rRUx-5c-YWKs8ARTC9JQ"
                                onChange={onChange}
                            />
                        </div>

                    </div>
                </div>
            </div>




        </>
    );

}

export default SignUp3;




