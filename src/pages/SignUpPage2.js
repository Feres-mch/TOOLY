import React from "react";

import * as Icon from 'react-bootstrap-icons';
import { useHistory } from "react-router-dom";
import "./signup.css";




const SignUp2 = (props) => {
    
      const  history = useHistory();

   
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
                                <span className="vertical-line2" style={{ color: "grey" }}></span>
                                <Icon.Image size={50} className="circle-icon " style={{ color: "white", }} />
                                <span className="vertical-line2" style={{ color: "grey" }}></span>
                            </div>


                        </div>
                        {/*stepper */}
                        <br />
                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">

                                <h6>Number :*</h6>
                                <input type="text" id="phone_number" className="form-control" placeholder="phone number" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />


                            </div>
                        </div>
                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">
                                <h6>Email :*</h6>
                                <input type="text" id="email" className="form-control" placeholder="Email" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">
                                <h6>Street :*</h6>
                                <input type="text" id="street" className="form-control" placeholder="Street" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">
                                <div className="  col-md-1" style={{ display: "inline" }}>
                                    <h6 style={{ display: "inline" }}>State</h6>
                                </div>
                                <div className="offset-md-1  col-md-1" style={{ display: "inline" }}>
                                    <h6 style={{ display: "inline" }}>City</h6>
                                </div>
                                <div className="offset-md-1  col-md-1" style={{ display: "inline" }}>
                                    <h6 style={{ display: "inline" }}>Postal Code</h6>
                                </div>
                            </div>
                            <div className="input-group offset-md-5 col-md-6">
                                <input type="text" id="state" className="form-control" placeholder="state" style={{ width: "2px" }} aria-label="Username" aria-describedby="basic-addon1" />
                                <input type="text" id="city" className="form-control" placeholder="city" style={{ width: "50px" }} aria-label="Username" aria-describedby="basic-addon1" />
                                <input type="text" id="postal_code" className="form-control" placeholder="postal_code" style={{ width: "50px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>


                        </div>

                        <br />
                        <div className="row  ">

                            <div className=" offset-md-8 col-md-4">
                            
                                    <input type="submit" /*onClick={this.Previous} */name="submit" className="btn   login_btn btn-md" style={{ width: "150px", marginLeft: "5px" }} value="Previous" />
                               
                                
                                    <input type="submit" onClick={Next} name="submit" className="btn   login_btn btn-md" style={{ width: "150px", marginLeft: "5px" }} value="Next" />
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </>
    );


   function Next(e)  {

    e.preventDefault();
   
    let data=({
      firstname: props.location.state.firstname,
      lastname: props.location.state.lastname,
      username: props.location.state.username,
      password : props.location.state.password,
      birthDate: props.location.state.birthDate,
      tel : document.getElementById("phone_number").value,
      email :  document.getElementById("email").value,
      address:{
            state:document.getElementById("state").value,
            city:document.getElementById("city").value,
           street: document.getElementById("street").value,
           postalCode: document.getElementById("postal_code").value
        },
      
        type :"simple user",
    });
 
    console.log( data);
   history.push({
        pathname: '/SignUpPage3',
          state: data // your data array of objects
      })
  
  }
}





export default SignUp2;
