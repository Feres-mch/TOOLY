import React, { Component } from "react";
import "./profilPage.css";
export default class profilPage extends Component {

    render() {
        console.log(this.props.state);
        return (
            <>

           
                <div class="padding">
                    <div class="row container ">
                        <div class="col-md-12 col-xl-12">
                            <div class="cardProfil">
                                <div class="row ">
                                    <div class="col-md-4 card-pic">
                                        <h5>hassen jalleli</h5>
                                        <h6>web developper</h6>
                                    </div>
                                    <div class="col-md-8">
                                        <h6>information</h6>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h5>firstname</h5>
                                                <p> hassen</p>
                                            </div>
                                            <div class="col-md-6">
                                                <h5>lastname</h5>
                                                <p>jalleli</p>
                                            </div>
                                            <hr />

                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h5>email</h5>
                                                <p>hassen.jalleli@esprit.tn</p>
                                            </div>
                                            <div class="col-md-6">
                                                <h5>username</h5>
                                                <p>hassenjalleli</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h5>adresse</h5>
                                                <p>rades</p>
                                            </div>
                                            <div class="col-md-6">
                                                <h5>phone number</h5>
                                                <p>28866156</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h5>password</h5>
                                                <p>*******</p>
                                            </div>
                                            <div class="col-md-6">
                                                <h5>score</h5>
                                                <p>5.8</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="offset-md-6 col-md-6">
                                            <input type="submit" name="submit" class="btn   login_btn btn-md" style={{width: "250px", marginLeft: "5px" }} value="edit" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
        </div>

            </>
        )
    }
}