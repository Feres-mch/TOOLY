import React from "react";
import "./profil.css";
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
       
      let   data = ({
            firstName:  document.getElementById("firstname").value,
            lastName:  document.getElementById("lastname").value,
            userName:  document.getElementById("username").value,
            password:  document.getElementById("password").value,
            phoneNumber:  document.getElementById("number").value,
            email:  document.getElementById("email").value,
            birthDate:  document.getElementById("date").value,

            address: {
                state:  document.getElementById("state").value,
                city:  document.getElementById("city").value,
                street:  document.getElementById("street").value,
            },
            type: "client",
            verified: "true",
            images: {
                profileImage: props.location.state.images.profileImage,
                firstVerificationImage: props.location.state.images.firstVerificationImage,
                secondVerificationImage:props.location.state.images.secondVerificationImage,
            },
            identityCard : props.location.state.identityCard,
           
        });
            alert(data.firstName);
            alert(data.lastName);
            alert(data.userName);
            alert(data.identityCard);
            alert(props.location.state.identityCard);

        axios.put("http://localhost:5000/api/users/"+data.email, data).then(resp => {
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
          <Col sm={2} className="profile">
            <div className="imag">
              <Image src={props.location.state.images.profileImage}  roundedCircle className="image1"  />
              <h2>{props.location.state.userName}</h2>
              
              <hr className="hr" />
            </div>
           
            <Button variant="warning" onClick={edit} className="border border-dark btn-block">
              Edit Profil
            </Button>
          </Col>
          <Col sm={10} className="all">
            <Row  className="titre">
              <h1> Your Profil</h1>
            </Row>
            <Row className="donnee">
              <Col sm={5}>
                <div className="imag">
                  <Image src={props.location.state.images.profileImage} roundedCircle className="image1" />
                </div>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>First Name *</Form.Label>
                  
                  <Form.Control type="text" id="firstname" defaultValue={props.location.state.firstName} placeholder="last Name" />
                 
                  
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Last Name *</Form.Label>
                  
                  <Form.Control type="text" id="lastname" defaultValue={props.location.state.lastName} placeholder="last Name" />
                  
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Username *</Form.Label>
                  
                  <Form.Control type="text" id="username"  defaultValue={props.location.state.userName} placeholder="userName" />
                  
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Number *</Form.Label>
                  
                  <Form.Control type="text" id="number" defaultValue={props.location.state.phoneNumber} placeholder="phoneNumbe" />

                 
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Email address *</Form.Label>
                  
                  <Form.Control type="text" id="email" defaultValue={props.location.state.email} placeholder="email" />
                
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <label className="mrgR">Birth Date * </label>
                  
                  <Form.Control type="date" id="date" defaultValue={props.location.state.birthDate} placeholder="date" />
                 
                </Form.Group>
              </Col>
              <Col sm={7}>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Street *</Form.Label>
                  
                  <Form.Control type="text" id="street" defaultValue={props.location.state.address.street} placeholder="street" />
                
                </Form.Group>
                <div className="col-10 d-flex justify-content-between ">
                  <Form.Group className="col-4 ml-4">
                    <Form.Label>State *</Form.Label>
                   
                    <Form.Control type="text" id="state" defaultValue={props.location.state.address.state} placeholder="state" />
                
                  </Form.Group>
                  <Form.Group className="col-4 ml-4">
                    <Form.Label>City *</Form.Label>
                    
                    <Form.Control type="text" id="city" defaultValue={props.location.state.address.city} placeholder="city" />
                  
                  </Form.Group>
                  <Form.Group className="col-4 ml-4">
                    <Form.Label>Post Code *</Form.Label>
                    <Form.Control type="text" id="postcode" placeholder="Post Code" />
                  </Form.Group>

                </div>
                <Form.Group className="col-4 ml-4">
                    <Form.Label>password *</Form.Label>
                    <Form.Control type="password" id="password" defaultValue={props.location.state.password} placeholder="password" />
                  </Form.Group>
                <div>
                  <div className="cin  ">
                    <Image src={props.location.state.images.firstVerificationImage} className="image2 " />
                  
                    <Image src={props.location.state.images.secondVerificationImage}  className="image2" />
                    </div>

                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Editprofil;