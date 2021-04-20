import React , { useContext } from "react";
import QRcode from "react-qr-code";
import "./profil.css";
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

  console.log(props.location.state)
  const history = useHistory();
  function editpage() {
    history.push({
      pathname: '/editpage',
      state: props.location.state // your data array of objects
    })
  };
  
  
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
  const loggedIn = useContext(AuthContext);
  console.log(loggedIn.loggedIn);
let log = loggedIn.loggedIn;
 console.log(log)

  return (
<>
      <Container fluid>
        <Row className="rows">
          <Col sm={2} className="profile">
            <div className="imag">
              <Image src={props.location.state.images.profileImage} roundedCircle className="image1" />
              <h2>{props.location.state.userName}</h2>

              <hr className="hr" />
            </div>

            <Button variant="warning" onClick={editpage} className="border border-dark btn-block">
              Edit Profil
            </Button>
            <Button variant="warning" onClick={deleteAccount} className="border border-dark btn-block">
              delete your account
            </Button>
          </Col>
          <Col sm={10} className="all">
            <Row className="titre">
              <h1> Your Profil</h1>
            </Row>
            <Row className="donnee">
              <Col sm={5}>
                <div className="imag">
                  <Image src={props.location.state.images.profileImage} roundedCircle className="image1" />
                </div>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>First Name *</Form.Label>
                  <br />
                  <Form.Label>{props.location.state.firstName}</Form.Label>

                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Last Name *</Form.Label>
                  <br />
                  <Form.Label>{props.location.state.lastName}</Form.Label>
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Username *</Form.Label>
                  <br />
                  <Form.Label>{props.location.state.userName}</Form.Label>
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Number *</Form.Label>
                  <br />
                  <Form.Label>{props.location.state.phoneNumber}</Form.Label>
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Email address *</Form.Label>
                  <br />
                  <Form.Label>{props.location.state.email}</Form.Label>
                </Form.Group>
                <Form.Group className="col-11 ml-4">
                  <label className="mrgR">Birth Date * </label>
                  <br />
                  <Form.Label>{props.location.state.birthDate}</Form.Label>
                </Form.Group>
              </Col>
              <Col sm={7}>
                <Form.Group className="col-11 ml-4">
                  <Form.Label>Street *</Form.Label>
                  <br />
                  <Form.Label>{props.location.state.address.street}</Form.Label>
                </Form.Group>
                <div className="col-10 d-flex justify-content-between ">
                  <Form.Group className="col-4 ml-4">
                    <Form.Label>State *</Form.Label>
                    <br />
                    <Form.Label>{props.location.state.address.state}</Form.Label>
                  </Form.Group>
                  <Form.Group className="col-4 ml-4">
                    <Form.Label>City *</Form.Label>
                    <br />
                    <Form.Label>{props.location.state.address.city}</Form.Label>
                  </Form.Group>
                  <Form.Group className="col-4 ml-4">
                    <Form.Label>Post Code *</Form.Label>
                    <Form.Label>{props.location.state.address.postalCode}</Form.Label>
                  </Form.Group>
                </div>
                <div>
                  <QRcode value={" username : "+ props.location.state.userName +" firstname :" +props.location.state.firstName }
                  size={140}
                  level="H"
                  includeMargin={true}
                  
                  />
                  <div className="cin  ">
                    <Image src={props.location.state.images.firstVerificationImage} className="image2 " />

                    <Image src={props.location.state.images.secondVerificationImage} className="image2" />
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
export default ClientAdd;