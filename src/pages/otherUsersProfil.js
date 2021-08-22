import React, { useState, useContext } from "react";
import QRcode from "react-qr-code";
import "./profil.css";
import "./otherUser.css";
import ClaimUser from "./claimUser";
import AuthContext, { AuthContextProvider } from "../components/testAuth";
import {
    Container,
    Col,
    Row,
    Image,
    Button,
    Form,

} from "react-bootstrap";
import axios from 'axios';
import { useHistory } from "react-router-dom";


const ClientAdd = (props) => {

    /* is Admin*/
    let usertype = localStorage.getItem("type");
    let isAdmin;
    if (usertype === "admin") {
        isAdmin = true;
    } else {
        isAdmin = false;
    }
    let [buttonpopup, setButtonpopup] = useState(false);
    /**/
    console.log(props.location.state)
    const history = useHistory();
    /**link to edit page */
    function editpage() {
        history.push({
            pathname: '/editpage',
            state: props.location.state // your data array of objects
        })
    };
    /** lik to display all users */
    let [alluser, setAlluser] = useState();
    function displayusers() {

        axios.get("http://localhost:5000/api/users").then(resp => {
            alluser = resp;
            console.log(alluser);
            setAlluser(resp);
            history.push({
                pathname: '/allusers',
                state: alluser.data // your data array of objects
            });
        }).catch(err => {
            console.log(err);
        })
        console.log(alluser);

    };
    /** display request Users  */
    let [allRequestuser, setAllRequestuser] = useState();
    function displayRequestusers() {

        axios.get("http://localhost:5000/api/users/request").then(resp => {
            allRequestuser = resp;
            console.log(allRequestuser);
            setAllRequestuser(resp);
            history.push({
                pathname: '/userRequest',
                state: allRequestuser.data // your data array of objects
            });
        }).catch(err => {
            console.log(err);
        })


    };
    /** delete function */
    function deleteAccount(e) {
        e.preventDefault();

        axios.delete("http://localhost:5000/api/users/" + props.location.state._id).then(resp => {
            history.push({
                pathname: '/SignInPage',

            })
        }).catch(err => {
            console.log(err);
        })
    }

    /** loggedIn test */
    const loggedIn = useContext(AuthContext);
    console.log(loggedIn.loggedIn);
    let log = loggedIn.loggedIn;
    console.log(log)
    /** */
    return (
        <>
            <Container fluid>
                <Row className="rows ">
                    <Col sm={2} className="profile bg-c-lite-green">
                        <div className="imag">
                            <Image src={localStorage.getItem("image")} roundedCircle className="image1" />
                            <h2>{localStorage.getItem("username")}</h2>

                            <hr className="hr" />
                        </div>

                        <Button variant="warning" onClick={editpage} className="border  bg-c-lite-green border-dark btn-block">
                            Edit Profil
            </Button>
                        <Button variant="warning" onClick={deleteAccount} className="border bg-c-lite-green border-dark btn-block">
                            delete your account
            </Button>
                        {isAdmin && (
                            <>
                                <Button variant="warning" onClick={displayusers} className="border border-dark btn-block">
                                    display all users
            </Button>
                                <Button variant="warning" onClick={displayRequestusers} className="border border-dark btn-block">
                                    users request
           </Button>
                            </>
                        )}
                    </Col>
                    <Col sm={10} className="all">


                        <div class="page-content page-container" id="page-content">
                            <div class="padding">
                                <div class="row container d-flex justify-content-center">
                                    <div class="col-xl-6 col-md-12">
                                        <div class="card-otherUser user-card-full">
                                            <div class="row m-l-0 m-r-0">
                                                <div class="col-sm-4 bg-c-lite-green user-profile" style={{ minWidth: "18cm" }}>
                                                    <div class="card-block text-center text-white">
                                                        <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" /> </div>
                                                        <h6 class="f-w-600">{props.location.state.userName}</h6>
                                                    </div>
                                                </div>
                                                <div class="col-sm-12">
                                                    <div class="card-block  align-items-center text-center" >
                                                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <p class="m-b-10 f-w-600">UserName</p>
                                                                <h6 class="text-muted f-w-400">{props.location.state.userName}</h6>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <p class="m-b-10 f-w-600">FirstName</p>
                                                                <h6 class="text-muted f-w-400">{props.location.state.firstName}</h6>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <p class="m-b-10 f-w-600">LastName</p>
                                                                <h6 class="text-muted f-w-400">{props.location.state.lastName}</h6>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <p class="m-b-10 f-w-600">Email</p>
                                                                <h6 class="text-muted f-w-400">{props.location.state.email}</h6>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <p class="m-b-10 f-w-600">PhoneNumber</p>
                                                                <h6 class="text-muted f-w-400">{props.location.state.phoneNumber}</h6>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <p class="m-b-10 f-w-600">Address</p>
                                                                <h6 class="text-muted f-w-400">{props.location.state.address.state},{props.location.state.address.city}, {props.location.state.address.street}</h6>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div className="offset-md-10 coll-md-2">
                                                                <div >
                                                                    <button className="btn btn-lg  btn-block btn-login text-uppercase font-weight-bold mb-2" onClick={() => setButtonpopup(true)} style={{ backgroundColor: "black", color: "white" }} type="submit">Claim</button>
                                                                </div>
                                                            </div>
                                                            <ClaimUser trigger={buttonpopup} setTrigger={setButtonpopup}>
                                                                {props.location.state}
                                                            </ClaimUser>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </>
    );

};
export default ClientAdd;