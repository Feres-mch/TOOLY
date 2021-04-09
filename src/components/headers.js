import React from "react";


//import $ from 'jquery';
import './headers.css';
const Header = () => {
    return (
        <section class="navbar-dark  ">
           <div class="container">
              <div class="row">
               <div class="col-sm-12"> 
                <nav class="navbar navbar-expand-lg ">
                  <a class="navbar-brand text-white" href="/"><h2>TOOLY</h2></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
    
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item ">
                        <a class="nav-link text-white " href="#about">HOME<span class="sr-only">(current)</span></a>
                      </li>
                      
                     
                      
                    </ul>
                    <ul>
                    <li class="nav-item">
                        <a class="nav-link text-white " href="#tourist">I HAVE<span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link text-white " href="#tourist">I WANT<span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-white " href="#tourist">CONTACT<span class="sr-only">(current)</span></a>
                      </li>
                     
                    <li class="nav-item" style={{float:"right"}} >
                        <a class="nav-link text-white " href="/SignInPage">SIGN IN<span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item"  style={{float:"right"}}>
                        <a class="nav-link  text-white" href="/SignUpPage">SIGN UP<span class="sr-only">(current)</span></a>
                      </li>
                    </ul>
                  </div>
                 </nav>
                </div>
              </div>
            </div>
        </section> 
      );
    /*return (


        <nav className="navbar navbar-expand-lg navbar-mainbg">

            <div
                className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto text-center">

                 

                    <li className="nav-item ">
                        <NavLink className="nav-link" to="/" exact>
                        <img src={logo} style={{ width: "30%", height: "30%", }} alt="" />
                        </NavLink>
                    </li>
                    <li className="nav-item">

                        <input icon="search" style={{ marginTop: "20px" ,float: "left", textAlign: "center"}} class="col-md" />

                    </li>
                    <li className="nav-item" style={{float:"right"}}>
                        <NavLink className="nav-link" to="/SignUpPage" exact>
                            Sign Up
                        </NavLink>
                    </li>

                    <li className="nav-item" style={{float:"right"}}>
                        <NavLink className="nav-link" to="/SignInPage" exact>
                            Sign In
                        </NavLink>
                    </li>


                </ul>
            </div>
        </nav>
    );*/
}

export default Header;