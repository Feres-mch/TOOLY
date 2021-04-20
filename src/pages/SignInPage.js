import React from "react";




import axios from 'axios';
import "./siginin.css";

import * as Icon from 'react-bootstrap-icons';
import { useHistory } from "react-router-dom";
const SignIn = (props) => {
  const history = useHistory();

  async function login(e) {
    e.preventDefault();
    let request = {
      email: document.getElementById("Email").value,
      password: document.getElementById("password").value

    }
    console.log(request.email)
    console.log(request.password);
    axios.post("http://localhost:5000/api/users/login", request).then(resp => {

  
      alert(resp.data.firstName);
      alert( resp.cookie);
      if (resp.data.firstName !== "") {
          if(resp.data.verified){
        alert(resp.data);
        alert(resp.data);
        history.push({
          pathname: '/profil',
          state: resp.data // your data array of objects
        })
      }else{
        alert("you have  to verify your  account  so  you can contact  an agent in this  mail  tooly@tooly.com")
      }
      }

    }).catch(err => {
      alert(err)
      console.log(err);
      console.log("ghalta");
    })

  }
  async function forg_password(e) {
    e.preventDefault();
    
    let request = {
      email: document.getElementById("Email").value,
    
    }
    if(request.email===""){
      alert("you have to enter your email");
    }else{
      axios.post("http://localhost:5000/api/users/sendemail",request).then(resp => {

  
     alert (resp.data);
     
     

    }).catch(err => {
      alert(err)
      console.log(err);
      console.log("ghalta");
    })
    }

  }





  return (
    <>

      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Sign In!</h3>
                    <form  >


                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">  <Icon.Envelope /></span>
                        </div>
                        <input type="text" id="Email" className="form-control" placeholder="Email address" aria-label="Email" aria-describedby="basic-addon1" />
                      </div>


                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">  <Icon.Lock /></span>
                        </div>
                        <input type="text" id="password" className="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1" />
                      </div>

                      <div className="text-center">
                        <a className="small"  href="" onClick={forg_password}>Forgot password?</a></div>
                      {/**  <button className="btn btn-lg  btn-block  text-uppercase font-weight-bold mb-2" style={{ backgroundColor: "#FFC312" }} type="submit">CONNECT</button>*/}
                      <input type="submit" href="" name="submit" onClick={login} className="btn btn-lg  btn-block  text-uppercase font-weight-bold mb-2" style={{ backgroundColor: "#FFC312" }} value="CONNECT" />

                      <div className="text-center">
                        <a className="small" href="/"> Don't you have an account? let's make  one !!!</a></div>
                      <button className="btn btn-lg  btn-block btn-login text-uppercase font-weight-bold mb-2" style={{ backgroundColor: "black", color: "white" }} type="submit">CREATE AN ACCOUNT</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}





export default SignIn;

