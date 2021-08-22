import React from "react";




import axios from 'axios';
import "./siginin.css";

import * as Icon from 'react-bootstrap-icons';
import { useHistory } from "react-router-dom";
import Facebooklogin from 'react-facebook-login';
import Googlelogin from 'react-google-login';

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



      if (resp.data.firstName !== "") {
        if (resp.data.verified) {
          localStorage.setItem('username', resp.data.userName);
          localStorage.setItem('firstname', resp.data.firstName);
          localStorage.setItem('lastname', resp.data.lastName);
          localStorage.setItem('email', resp.data.email);
          localStorage.setItem('id', resp.data._id);
          localStorage.setItem('type', resp.data.type);
          localStorage.setItem('image',resp.data.images.profileImage);
          localStorage.setItem('address.city',resp.data.address.city);
          localStorage.setItem('address.state',resp.data.address.state);
          localStorage.setItem('address.street',resp.data.address.street);
          localStorage.setItem('birthdate',resp.data.birthDate);
          localStorage.setItem('phoneNumber',resp.data.phoneNumber);
          localStorage.setItem('identityCard',resp.data.identityCard);
          localStorage.setItem('cin1',resp.data.images.firstVerificationImage);
          localStorage.setItem('cin2',resp.data.images.secondVerificationImage  );
          localStorage.setItem('password',resp.data.password  );
          localStorage.setItem('address.code',resp.data.address.postalCode);

          history.push({
            pathname: '/profil',
            state: resp.data // your data array of objects
          })
        } else {
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
let code =Math.random().toString(36).substring(2);
localStorage.setItem("code",code);
    let request = {
      email: document.getElementById("Email").value,
      code:code,
    }
    if (request.email === "") {
      alert("you have to enter your email");
    } else {
      axios.post("http://localhost:5000/api/users/sendemail", request).then(resp => {






      }).catch(err => {
        alert(err)
        console.log(err);
        console.log("ghalta");
      })
      alert("check your  email")
    }

  };


  const respGmail = (resp) => {
 
   
    let picture = resp.profileObj.imageUrl;
    localStorage.setItem('image', picture);
    let emailuser = resp.profileObj.email;
   console.log(resp);
    axios.get("http://localhost:5000/api/users/" + emailuser).then(resp2 => {
     console.log(resp2.data)
      if (resp2.data==="false") {
        let data = ({
          firstname: resp.profileObj.givenName,
          lastname: resp.profileObj.familyName,
          username: resp.profileObj.name,
          password: resp.profileObj.name,
          email :resp.profileObj.email,
         
        });
        console.log(data.firstname);
        history.push({
          pathname: '/SignUpPage2',
          state: data // your data array of objects
        })
      
      }else{
        
        if (resp2.data.verified) {
          localStorage.setItem('username', resp2.data.userName);
          localStorage.setItem('firstname', resp2.data.firstName);
          localStorage.setItem('lastname', resp2.data.lastName);
          localStorage.setItem('email', resp2.data.email);
          localStorage.setItem('id', resp2.data._id);
          localStorage.setItem('type', resp2.data.type);
          localStorage.setItem('image',resp2.data.images.profileImage);
          localStorage.setItem('address.city',resp2.data.address.city);
          localStorage.setItem('address.state',resp2.data.address.state);
          localStorage.setItem('address.street',resp2.data.address.street);
          localStorage.setItem('birthdate',resp2.data.birthDate);
          localStorage.setItem('phoneNumber',resp2.data.phoneNumber);
          localStorage.setItem('identityCard',resp2.data.identityCard);
          localStorage.setItem('cin1',resp2.data.images.firstVerificationImage);
          localStorage.setItem('cin2',resp2.data.images.secondVerificationImage  );
          localStorage.setItem('password',resp2.data.password  );
          localStorage.setItem('address.postalCode',resp2.data.address.postalCode);
           history.push({
              pathname: '/profil',
              state: resp2.data // your data array of objects
            })
        } else {
          alert("you have  to verify your  account  so  you can contact  an agent in this  mail  tooly@tooly.com")
        }
      }
    })

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
                        <a className="small" href="" onClick={forg_password}>Forgot password?</a></div>
                      {/**  <button className="btn btn-lg  btn-block  text-uppercase font-weight-bold mb-2" style={{ backgroundColor: "#FFC312" }} type="submit">CONNECT</button>*/}
                      <input type="submit" href="" name="submit" onClick={login} className="btn btn-lg  btn-block  text-uppercase font-weight-bold mb-2" style={{ backgroundColor: "#FFC312" }} value="CONNECT" />
                          <Googlelogin className="btn btn-lg  btn-block btn-login text-uppercase font-weight-bold mb-2"
                       
                     clientId="357813044702-64smgg77a1910qhlc87jivjotm46ejh9.apps.googleusercontent.com"
                      buttonText="Login"
                      onSuccess={respGmail}
                      onFailure={respGmail}
                      cookiePolicy={'single_host_origin'}
                      />
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

