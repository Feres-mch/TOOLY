import React from "react";

import * as Icon from 'react-bootstrap-icons';

import "./signup.css";


import { useHistory } from "react-router-dom";


const AjouterOffre = (props) => {


    const history = useHistory();
    function Next(e) {

        e.preventDefault();
    }

    return (
        <>
<h1>hello</h1>
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-md-12 col-xl-12">
                        <div className="row">
                            <div className=" offset-md-6 col-md-6">
                                <h2 style={{ color: "yellow" }}>ajouter offre</h2>
                            </div>
                        </div>
                        {/*stepper */}
                        <div className="col-md-12">
                            <div className="offset-md-4 col-md-8">
                                {/*<span className="vertical-line2"></span> <Icon.Unlock size={50} style={{  borderRadius: "50%",  backgroundColor:"yellow",color: "white", }} /> <span className="vertical-line2" ></span> <Icon.FileLock2 size={60} style={{ color: "yellow", }} />  <span className="vertical-line2" ></span>  <Icon.user size={60} style={{ color: "yellow", }} /> */}
                                <span className="vertical-line2" style={{ color: "yellow" }}></span>
                                <Icon.Unlock size={60} className="circle-icon-select " style={{ color: "white", }} />
                                <span className="vertical-line2" style={{ color: "yellow" }} />
                                <span className="vertical-line2" style={{ color: "grey" }}></span>
                                <Icon.PersonCircle size={50} className="circle-icon " style={{ color: "white", }} />
                                <span className="vertical-line2" style={{ color: "grey" }}></span>
                                <span className="vertical-line2" style={{ color: "grey" }}></span>
                                <Icon.Image size={50} className="circle-icon " style={{ color: "white", }} />
                                <span className="vertical-line2" style={{ color: "grey" }}></span>
                            </div>


                        </div>
                        {/*stepper */}
                        <br />
                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">

                                <h6>nom_offre :*</h6>
                                <input type="text" id="nom_offre" className="form-control" placeholder="nom_offre" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />


                            </div>
                        </div>
                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">
                                <h6>description :*</h6>
                                <input type="text" id="description" className="form-control" placeholder="description" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">
                                <h6>type :*</h6>
                                <input type="text" id="type" className="form-control" placeholder="type" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="row ">


                        </div>
                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">
                                <h6>mail_admin :*</h6>
                                <input type="text" id="mail_admin" className="form-control" placeholder="mail_admin" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">
                                <h6>date_debut :*</h6>
                                <input type="date" id="date_debut" className="form-control" placeholder="date_debut" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">
                                <h6>date_fin :*</h6>
                                <input type="date" id="conf_password" className="form-control" placeholder="date_fin" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="row ">

                            <div className=" offset-md-5 col-md-6">
                                <h6>nbr de personne :*</h6>
                                <input type="number" id="conf_password" className="form-control" placeholder="nbr de personne" style={{ width: "350px" }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <br />
                        <div className="row ">

                            <div className=" offset-md-8 col-md-4">


                                <input type="submit" onClick={Next} name="submit" className="btn   login_btn btn-md" style={{ width: "250px", marginLeft: "5px" }} value="Next" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </>
    );

}





export default AjouterOffre;





