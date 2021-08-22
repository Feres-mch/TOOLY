import React, {useEffect, useState, useContext } from "react";
import * as Icon from 'react-bootstrap-icons';

//import $ from 'jquery';
import './headers.css';
import AuthContext, { AuthContextProvider } from "./testAuth";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import TextField from '@material-ui/core/TextField';
const Header = () => {
  const loggedIn = useContext(AuthContext);
  console.log(loggedIn.loggedIn);
  let log = loggedIn.loggedIn;
  console.log("log is  : " + log);
  let [alluser, setAlluser] = useState([]);

  const history = useHistory();


  function getuser(user){
 if(!user){
   console.log("mafamachy")
 }else{
  console.log(user);
  history.push({
    pathname: '/otherprofil',
    state: user // your data array of objects
  })

}
 
  }
useEffect(()=>
{
  const getData = async () => {
    const res = await axios.get("http://localhost:5000/api/users/")
    
       setAlluser(res.data);
     
  }
getData();
},[]
);
console.log(alluser)

  function logout() {
    alert("logout");
    axios.get("http://localhost:5000/api/users/logout").then(resp => {
      alert(resp);

    });
    localStorage.removeItem("firstname");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("lastname");
    localStorage.removeItem("image");
    localStorage.removeItem("type");
    localStorage.removeItem("cin1");
    localStorage.removeItem("birthdate");
    localStorage.removeItem("address.city");
    localStorage.removeItem("identityCard");
    localStorage.removeItem("address.street");
    localStorage.removeItem("address.state");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("cin2");
    localStorage.removeItem("id");
    localStorage.removeItem("password");
    localStorage.removeItem("address.postalCode");

  }
  return (
    <section className="navbar-dark  ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <nav className="navbar navbar-expand-lg ">

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                    <Icon.HouseDoor size={60} style={{ color: "white", paddingBottom: "20px", }} />

                  </li>



                </ul>
                <ul>
                  {log && (
                    <><li>
                     

                        <Autocomplete
                        
                          id="combo-box-demo"
                          options={alluser}
                          getOptionLabel={(option) => option.firstName+" "+option.lastName}
                          style={{ width: 300 }}
                          renderInput={(params) => <TextField {...params}   label="profil search" variant="outlined" style={{backgroundColor:"white"}} /> }
                          onChange={(event, newValue) => {
                            getuser(newValue);
                          }}
                          
                        />
                      
                    </li>
                    </>
                  )
                  }
                  <li className="nav-item">
                    <a className="nav-link text-white " href="#tourist">I HAVE<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item" >
                    <a className="nav-link text-white " href="#tourist">I WANT<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white " href="#tourist">CONTACT<span className="sr-only">(current)</span></a>
                  </li>
                  {!log && (
                    <>
                      <li className="nav-item" style={{ float: "right" }} >
                        <a className="nav-link text-white " href="/SignInPage">SIGN IN<span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item" style={{ float: "right" }}>
                        <a className="nav-link  text-white" href="/SignUpPage">SIGN UP<span className="sr-only">(current)</span></a>
                      </li>
                    </>
                  )}
                  {log && (
                    <>
                      <li className="nav-item" style={{ float: "right" }} >
                        <a className="nav-link text-white " onClick={logout} href="/SignInPage">LOG OUT<span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item" style={{ float: "right" }} >
                        <a className="nav-link text-white " href="/profil">PROFIL<span className="sr-only">(current)</span></a>
                      </li>
                    </>
                  )}

                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
  /*return (


      <nav classNameName="navbar navbar-expand-lg navbar-mainbg">

          <div
              classNameName="collapse navbar-collapse" id="navbarSupportedContent">
              <ul classNameName="navbar-nav ml-auto text-center">

               

                  <li classNameName="nav-item ">
                      <NavLink classNameName="nav-link" to="/" exact>
                      <img src={logo} style={{ width: "30%", height: "30%", }} alt="" />
                      </NavLink>
                  </li>
                  <li classNameName="nav-item">

                      <input icon="search" style={{ marginTop: "20px" ,float: "left", textAlign: "center"}} className="col-md" />

                  </li>
                  <li classNameName="nav-item" style={{float:"right"}}>
                      <NavLink classNameName="nav-link" to="/SignUpPage" exact>
                          Sign Up
                      </NavLink>
                  </li>

                  <li classNameName="nav-item" style={{float:"right"}}>
                      <NavLink classNameName="nav-link" to="/SignInPage" exact>
                          Sign In
                      </NavLink>
                  </li>


              </ul>
          </div>
      </nav>
  );*/
}

export default Header;