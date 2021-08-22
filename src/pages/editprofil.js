import React from "react";
import "./editProfilCss.css";
import {
  Container,
  Col,
  Row,
  Image,
  Button,
  Form,

} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from 'axios';


const Editprofil = (props) => {
  const history = useHistory();



  function edit(e) {
    e.preventDefault();
    let birthdate;
    if(document.getElementById("date").value===""){
      birthdate=localStorage.getItem("date");
    }else{
      birthdate=document.getElementById("date").value;
    }
    let data = ({
      firstName: document.getElementById("firstname").value,
      lastName: document.getElementById("lastname").value,
      userName: document.getElementById("username").value,
      password: document.getElementById("password").value,
      phoneNumber: document.getElementById("number").value,
      email: document.getElementById("email").value,
      birthDate: document.getElementById("date").value,

      address: {
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        street: document.getElementById("street").value,
        postalCode :document.getElementById("zipCode").value,
      },
      type: localStorage.getItem("type"),
      verified: "true",
      images: {
        profileImage: localStorage.getItem("image"),
        firstVerificationImage: localStorage.getItem("cin1"),
        secondVerificationImage: localStorage.getItem("cin2"),
      },
      identityCard: props.location.state.identityCard,

    });
    localStorage.setItem('username', document.getElementById("username").value);
    localStorage.setItem('firstname', document.getElementById("firstname").value);
    localStorage.setItem('lastname', document.getElementById("lastname").value);



    localStorage.setItem('address.city', document.getElementById("city").value);
    localStorage.setItem('address.state', document.getElementById("state").value);
    localStorage.setItem('address.street', document.getElementById("street").value);
    localStorage.setItem('birthdate', document.getElementById("date").value);
    localStorage.setItem('phoneNumber', document.getElementById("number").value);
    localStorage.setItem('address.code', document.getElementById("zipCode").value);


    localStorage.setItem('password', document.getElementById("password").value);
    axios.put("http://localhost:5000/api/users/" + data.email, data).then(resp => {
      history.push({
        pathname: '/profil',
        state: data // your data array of objects
      })
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <>


      <Container fluid>
        <Row className="rows">
          <Col sm={2} className="profile bg-c-lite-green">
            <div className="imag">
              <Image src={localStorage.getItem("image")} roundedCircle className="image1" />
              <h2>{localStorage.getItem("username")}</h2>

              <hr className="hr" />
            </div>

            <Button variant="warning"  className="border bg-c-lite-green border-dark btn-block">
              Edit Profil
            </Button>
          </Col>

          <Col sm={10} className="all">
            <div class="container">
              <div class="row gutters">
                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div class="card2 bg-c-lite-green ">
                    <div class="card-body ">
                      <div class="account-settings">
                        <div class="user-profile">
                          <div class="user-avatar">
                        
                            <img src={localStorage.getItem("image")} alt="Maxwell Admin" />
                          </div>
                          <h3 class="user-name">{localStorage.getItem("username")}</h3>
                          <h4 class="user-email">{localStorage.getItem("email")}</h4>
                        </div>
                     
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div class="card " style={{marginTop:"50px"}}>
                    <div class="card-body" >
                      <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 class="mb-2 text-primary">Personal Details</h6>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="fullName">First Name</label>
                            <Form.Control type="text" id="firstname" defaultValue={localStorage.getItem("firstname")} placeholder="last Name" />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="eMail">LastName</label>
                            <Form.Control type="text" id="lastname" defaultValue={localStorage.getItem("lastname")} placeholder="last Name" />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="phone">UserName</label>
                            <Form.Control type="text" id="username" defaultValue={localStorage.getItem("username")} placeholder="last Name" />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="phone">Email</label>
                            <Form.Control type="text" id="email" defaultValue={localStorage.getItem("email")} placeholder="last Name" />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="website"> Phone Number</label>
                            <Form.Control type="text" id="number" defaultValue={localStorage.getItem("phoneNumber")} placeholder="last Name" />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="website"> Birthdate</label>
                            <Form.Control type="date" id="date" defaultValue={localStorage.getItem("birthdate")} placeholder="last Name" />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="website"> Password</label>
                            <Form.Control type="password" id="password" defaultValue={localStorage.getItem("password")} placeholder="last Name" />
                          </div>
                        </div>
                      </div>
                      <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 class="mt-3 mb-2 text-primary">Address</h6>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="Street">Street</label>
                            <Form.Control type="text" id="street" defaultValue={localStorage.getItem("address.street")} placeholder="last Name" />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="ciTy">City</label>
                            <Form.Control type="text" id="city" defaultValue={localStorage.getItem("address.city")} placeholder="last Name" />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="sTate">State</label>
                            <Form.Control type="text" id="state" defaultValue={localStorage.getItem("address.state")} placeholder="last Name" />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="zIp">Zip Code</label>
                            <Form.Control type="text" id="zipCode" defaultValue={localStorage.getItem("address.code")} placeholder="last Name" />
                          </div>
                        </div>
                      </div>
                      <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div class="text-right">
                            <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
                            <button type="button" id="submit" name="submit" onClick={edit} class="btn btn-primary">Update</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*
            <Row  className="titre">
              <h1> Your Profil</h1>
            </Row>
            <Row className="donnee">
              <Col sm={5}>
                <div className="imag">
                  <Image src={localStorage.getItem("image")} roundedCircle className="image1" />
                </div>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>First Name *</Form.Label>
                  
                  <Form.Control type="text" id="firstname" defaultValue={localStorage.getItem("firstname")} placeholder="last Name" />
                 
                  
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Last Name *</Form.Label>
                  
                  <Form.Control type="text" id="lastname" defaultValue={localStorage.getItem("lastname")} placeholder="last Name" />
                  
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Username *</Form.Label>
                  
                  <Form.Control type="text" id="username"  defaultValue={localStorage.getItem("username")} placeholder="userName" />
                  
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Number *</Form.Label>
                  
                  <Form.Control type="text" id="number" defaultValue={localStorage.getItem("phoneNumber")} placeholder="phoneNumbe" />

                 
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Email address *</Form.Label>
                  
                  <Form.Control type="text" id="email" defaultValue={localStorage.getItem("email")} placeholder="email" />
                
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <label className="mrgR">Birth Date * </label>
                  
                  <Form.Control type="date" id="date" defaultValue={localStorage.getItem("birthdate")} placeholder="date" />
                 
                </Form.Group>
              </Col>
              <Col sm={7}>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Street *</Form.Label>
                  
                  <Form.Control type="text" id="street" defaultValue={localStorage.getItem("address.street")} placeholder="street" />
                
                </Form.Group>
                <div className="col-10 d-flex justify-content-between ">
                  <Form.Group className="col-4 ml-4">
                    <Form.Label>State *</Form.Label>
                   
                    <Form.Control type="text" id="state" defaultValue={localStorage.getItem("address.state")} placeholder="state" />
                
                  </Form.Group>
                  <Form.Group className="col-4 ml-4">
                    <Form.Label>City *</Form.Label>
                    
                    <Form.Control type="text" id="city" defaultValue={localStorage.getItem("address.city")} placeholder="city" />
                  
                  </Form.Group>
                  <Form.Group className="col-4 ml-4">
                    <Form.Label>Post Code *</Form.Label>
                    <Form.Control type="text" id="postcode" placeholder="Post Code" />
                  </Form.Group>

                </div>
                <Form.Group className="col-4 ml-4">
                    <Form.Label>password *</Form.Label>
                    <Form.Control type="password" id="password" defaultValue={localStorage.getItem("password")} placeholder="password" />
                  </Form.Group>
                <div>
                  <div className="cin  ">
                    <Image src={localStorage.getItem("cin1")} className="image2 " />
                  
                    <Image src={localStorage.getItem("cin2")}  className="image2" />
                    </div>

                </div>
              </Col>
            </Row>
           */}
          </Col>
        </Row>
      </Container>

    </>
  );
};
export default Editprofil;