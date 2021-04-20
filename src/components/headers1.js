import React from "react";
import logo from "../images/tooly.png"
import * as Icon from 'react-bootstrap-icons';

//import $ from 'jquery';
import './headers.css';
const Header1 = () => {
    return (
        <section className="navbar1  ">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <nav className="navbar navbar-expand-lg ">
                          
                            <img src={logo} className="icon" style={{ height: "50px", top: "0", position: "absolute" }} alt="" />
                            <a className="navbar-brand " style={{ marginLeft: "70px", color: "black" }} href="/"><h2>TOOLY</h2></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="input-group mb-3">

                                <input type="text" className="form-control" placeholder="WHAT ARE YOU LOKING FOR ?" aria-label="Username" aria-describedby="basic-addon1" />
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">  <Icon.Search /></span>
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