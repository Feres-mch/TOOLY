import React, { Component } from "react";

import logo from '../images/1.4.jpeg';
import logo2 from '../images/1.2.jpg';
import logo3 from '../images/1.3.jpg';
import cat from '../images/cat.jpg';
import astral from '../images/astral.jpg';
import bosch from '../images/Bosch.jpg';
import schneider from '../images/schneider.png';
import gardening from '../images/3.jpg';
import plombry from '../images/2.jpg';
import Dockyard from '../images/4.jpg';
import electricity from '../images/5.jpg';
import painting from '../images/6.jpg';
import prod1 from '../images/7.jpg';
import Button from 'react-bootstrap/Button';

import "../App.css";

export default class Home extends Component {

    render() {
        return (
            <>
                <section class="">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src={logo} alt="First slide" style={{ height: "50%" }} />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 " src={logo2} alt="Second slide" style={{ height: "50%" }} />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={logo3} alt="Third slide" style={{ height: "50%" }} />
                            </div>
                        </div>
                    </div>
                </section>

                <br />
                <section class="bg-light" id="about">
                    <div class="container-fluid YellowBox">
                        <div class="row">
                            <div class="offset-4 col-sm-12 col-md-12">
                                <img src={gardening} class="icon" alt="" />
                                <img src={plombry}  class="icon" alt="" />
                                <img src={Dockyard}  class="icon" alt="" />
                                <img src={electricity} class="icon" alt="" />
                                <img src={painting}  class="icon" alt="" />

                            </div>
                            <div class="offset-4 "></div>
                        </div>
                    </div>
                </section>

                <br />

                <h3 class=" col-sm-4 col-md-12" style={{ textAlign: 'center', }}> <span class="vertical-line2"></span>OUR MOST LOANED PRODUCTS ON OUR PLATFORM <span class="vertical-line2" ></span></h3>

                <section id="about">
                    <div class="container-fluid ">
                        <div class="row" >
                            <div class="offset-md-2 col-sm-12 col-md-4" style={{ marginLeft: '50px' }} className="PoductBox">
                                <img src={prod1} style={{ width: '250px', }} alt="" />
                                <hr style={{ width: '180px', color: 'yellow' }} />
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <Button style={Butt}> Show More</Button>

                            </div>
                            <div class=" col-sm-12 col-md-4" style={{ marginLeft: '50px' }} className="PoductBox">
                                <img src={prod1} style={{ width: '250px', }} alt="" />
                                <hr style={{ width: '180px', color: "white" }} />
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <Button style={Butt}> Show More</Button>
                            </div>
                            <div class=" col-sm-12 col-md-4" style={{ marginLeft: '50px' }} className="PoductBox">
                                <img src={prod1} style={{ width: '250px', }} alt="" />
                                <hr style={{ width: '180px', color: "white" }} />
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <Button style={Butt}> Show More</Button>
                            </div>
                            <div class=" col-sm-12 col-md-4" style={{ marginLeft: '50px' }} className="PoductBox">

                                <img src={prod1} style={{ width: '250px', }} alt="" />
                                <hr style={{ width: '180px', color: "white" }} />
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <p style={{ color: 'white' }}>Name : Drill</p>
                                <Button style={Butt}> Show More</Button>

                            </div>


                        </div>
                    </div>
                </section>
                <h2 style={{ textAlign: 'center', }} class=" col-sm-12 col-md-12"><span class="vertical-line2" ></span>REVIEWS ABOUT OUR PLATFORM <span class="vertical-line2" ></span></h2>

                <section id="about">
                    <div class="container-fluid ">
                        <div class="row" >
                            <div class="  col-sm-12 col-md-4" className="reviewBox" style={{ marginLeft: '50px' }}>

                                <p style={{ color: 'white' }}>hsdjhsdshjgdsjghjhsgdhsgj</p>
                                <h3 style={{ textAlign: 'center', color: 'white' }} >hassen jalleli</h3>

                            </div>
                            <div class=" col-sm-12 col-md-4" className="reviewBox" style={{ marginLeft: '50px' }}>

                                <p style={{ color: 'white' }}>hsdjhsdshjgdsjghjhsgdhsgjhdgsjhgds</p>
                                <h3 style={{ textAlign: 'center', color: 'white' }} >hassen jalleli</h3>
                            </div>
                            <div class=" col-sm-12 col-md-4" className="reviewBox" style={{ marginLeft: '50px' }}>

                                <p style={{ color: 'white' }}>hsdjhsdshjgdsjghjhsgdhsgjhdgsjhgds</p>
                                <h3 style={{ textAlign: 'center', color: 'white' }} >hassen jalleli</h3>
                            </div>
                            <div class=" col-sm-12 col-md-4" className="reviewBox" style={{ marginLeft: '50px' }}>


                                <p style={{ color: 'white' }}>hsdjhsdshjgdsjghjhsgdhsgjhdgsjhgds</p>
                                <h3 style={{ textAlign: 'center', color: 'white' }} >hassen jalleli</h3>

                            </div>


                        </div>
                    </div>
                </section>
                <h2 style={{ textAlign: 'center', }} class=" col-sm-12 col-md-12"><span class="vertical-line2" ></span>REVIEWS ABOUT OUR PLATFORM <span class="vertical-line2" ></span></h2>
                <section id="about">
                    <div class="container-fluid ">
                        <div class="row" >
                            <div class="  col-sm-12 col-md-3" >
                                <a href="https://www.astral.tn/">
                                    <img src={astral} style={{ width: '250px' }} alt="" />
                                </a>
                            </div>
                            <div class="  col-sm-12 col-md-3" >
                                <a href="https://www.cat.com/en_US.html">
                                    <img src={cat} style={{ width: '250px' }} alt="" />
                                </a>
                            </div>
                            <div class="  col-sm-12 col-md-3" >
                                <a href="https://www.bosch.com/">
                                    <img src={bosch} style={{ width: '300px' }} alt="" />
                                </a>
                            </div>
                            <div class="  col-sm-12 col-md-3" >
                                <a href="https://www.se.com/tn/fr/">
                                    <img src={schneider} style={{ width: '250px' }} alt="" />
                                </a>
                            </div>



                        </div>
                    </div>
                </section>



            </>
        );
    }
}








const Butt = {
    backgroundColor: "#ffc808",
    border: "none",
    padding: "10px 20px ",
    marginLeft: "20px",
    color: "white",
    borderRadius: 5,
    marginBottom: "5px",

}

