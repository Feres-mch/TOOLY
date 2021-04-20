import React, { useContext } from "react";
import * as Icon from 'react-bootstrap-icons';

//import $ from 'jquery';
import './headers.css';
import AuthContext, { AuthContextProvider } from "./testAuth";
import axios from 'axios';
const Header = () => {
  const loggedIn = useContext(AuthContext);
  console.log(loggedIn.loggedIn);
let log = loggedIn.loggedIn;
console.log ("log is  : "+log);

  function logout(){
    alert("logout");
    axios.get("http://localhost:5000/api/users/logout").then(resp => {
      alert(resp);

  });

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
                    <Icon.HouseDoor size={60} style={{ color: "white", paddingBottom: "20px",  }} />

                  </li>



                </ul>
                <ul>
                  <li className="nav-item">
                    <a className="nav-link text-white " href="#tourist">OWNED EQUIPEMENTS<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item" >
                    <a className="nav-link text-white " href="#tourist">WANTED EQUIPEMENTS<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white " href="#tourist">CONTACT<span className="sr-only">(current)</span></a>
                  </li>
                {!log &&(
                  <>
                      <li className="nav-item" style={{ float: "right" }} >
                        <a className="nav-link text-white " href="/SignInPage">SIGN IN<span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item" style={{ float: "right" }}>
                        <a className="nav-link  text-white" href="/SignUpPage">SIGN UP<span className="sr-only">(current)</span></a>
                      </li>
                      </>
                )}
                     {log &&(
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