import React from "react";
import logo from "../images/tooly.png"
import * as Icon from 'react-bootstrap-icons';

//import $ from 'jquery';
import './headers.css';
const Header1 = () => {
    return (
        <section class="navbar1  ">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <nav class="navbar navbar-expand-lg ">
                          
                            <img src={logo} class="icon" style={{ height: "50px", top: "0", position: "absolute" }} alt="" />
                            <a class="navbar-brand " style={{ marginLeft: "70px", color: "black" }} href="/"><h2>TOOLY</h2></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="input-group mb-3">

                                <input type="text" class="form-control" placeholder="WHAT ARE YOU LOKING FOR ?" aria-label="Username" aria-describedby="basic-addon1" />
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">  <Icon.Search /></span>
                                </div>
                            </div>
                            <Icon.PersonCircle size={60} style={{ color: "yellow", paddingBottom: "20px" }} />
                            <Icon.CartPlus size={60} style={{ color: "black", paddingBottom: "20px" }} />


                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Header1;