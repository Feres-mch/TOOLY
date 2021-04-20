import React from "react";

import * as Icon from 'react-bootstrap-icons';

import "./signup.css";


import { useHistory } from "react-router-dom";


const SignUp = (props) => {


  const history = useHistory();
  function Next(e) {

    e.preventDefault();

    let data = ({
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      birthDate : document.getElementById("date").value,
    });
   
    if (document.getElementById("conf_password").value === data.password) {

      history.push({
        pathname: '/SignUpPage2',
        state: data // your data array of objects
      })
    } else {
      alert("password != confirme password");
    }

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
                <span className="vertical-line2" style={{ color: "grey" }}></span>
                <Icon.PersonCircle size={50} className="circle-icon " style={{ color: "white", }} />
                <span className="vertical-line2" style={{ color: "grey" }}></span>
                <span className="vertical-line2" style={{ color: "grey" }}></span>
                <Icon.Image size={50} className="circle-icon " style={{ color: "white", }} />
                <span className="vertical-line2" style={{ color: "grey" }}></span>
              </div>


            </div>
            {/*stepper */}
            <br />
            <div className="row ">

              <div className=" offset-md-5 col-md-6">

                <h6>firstname :*</h6>
                <input type="text" id="firstname" className="form-control" placeholder="firstname" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />


              </div>
            </div>
            <div className="row ">

              <div className=" offset-md-5 col-md-6">
                <h6>Last Name :*</h6>
                <input type="text" id="lastname" className="form-control" placeholder="lastname" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className="row ">

              <div className=" offset-md-5 col-md-6">
                <h6>Username :*</h6>
                <input type="text" id="username" className="form-control" placeholder="username" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className="row ">

              <div className=" offset-md-5 col-md-6">
                <h6>Date :*</h6>
                <input type="date" id="date" className="form-control" placeholder="username" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className="row ">

              <div className=" offset-md-5 col-md-6">
                <h6>password :*</h6>
                <input type="text" id="password" className="form-control" placeholder="password" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className="row ">

              <div className=" offset-md-5 col-md-6">
                <h6>confirm password :*</h6>
                <input type="text" id="conf_password" className="form-control" placeholder="confirm password" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
            <br />
            <div className="row ">

              <div className=" offset-md-8 col-md-4">


                <input type="submit" onClick={Next} name="submit" className="btn   login_btn btn-md" style={{ width: "250px", marginLeft: "5px" }} value="Next" />

              </div>
            </div>

          </div>
        </div>
      </div>




    </>
  );

}





export default SignUp;





