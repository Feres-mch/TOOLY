import React from "react";




import axios from 'axios';
import "./siginin.css";

import * as Icon from 'react-bootstrap-icons';
import { useHistory  } from "react-router-dom";
const Forgotpassword = (props) => {
  const history = useHistory();

 let email = props.match.params.email;

 console.log(email);
function reset_password(e){
  e.preventDefault();
 
  let request={
    password: document.getElementById("password").value,
    rep_password:document.getElementById("rep-password").value,
  }
  if(document.getElementById("code").value===""){
    alert("insert ur key");
  }else
  if(document.getElementById("code").value!== localStorage.getItem("code")){
    alert("your key is  incorrect");
  }else
  if(request.password==="" || request.rep_password===""){
    alert("empty inputs");
  }else if( request.password!==request.rep_password){
    alert("password must be like repeat-password")
  }else {
    axios.put("http://localhost:5000/api/users/forg-password/"+email,request).then(resp => {

  
      alert ("congratulations your password has been changed");
      localStorage.removeItem("code")
      history.push({
        pathname: '/SignInPage',
      })
 
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
                    <h3 className="login-heading mb-4">reset password</h3>
                    <form  >
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">   <Icon.Lock /></span>
                        </div>
                        <input type="text" id="code" className="form-control" placeholder="code" aria-label="Email" aria-describedby="basic-addon1" />
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">   <Icon.Lock /></span>
                        </div>
                        <input type="text" id="password" className="form-control" placeholder="password" aria-label="Email" aria-describedby="basic-addon1" />
                      </div>


                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">  <Icon.Lock /></span>
                        </div>
                        <input type="text" id="rep-password" className="form-control" placeholder="repeat your password" aria-label="Username" aria-describedby="basic-addon1" />
                      </div>

                    
                      <input type="submit" name="submit" onClick={reset_password}  className="btn btn-lg  btn-block  text-uppercase font-weight-bold mb-2" style={{ backgroundColor: "#FFC312" }} value="change your password" />

                      
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





export default Forgotpassword;

