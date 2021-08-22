import React, { useEffect, useState, useContext } from "react";
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
import QrCode from "./QrCode"


const ClientAdd = (props) => {

  /* is Admin*/
  let usertype = localStorage.getItem("type");
  let isAdmin;
  if (usertype === "admin") {
    isAdmin = true;
  } else {
    isAdmin = false;
  }
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
  let [claimuser, setclaimuser] = useState();
  let [reclamationUser, setreclamationUser] = useState("");
  let claimUserString = "";
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
  let [buttonpopup, setButtonpopup] = useState(false);
  /*****get claim user */
  useEffect(() => {
    const getclaimData = async () => {

      let data = ({
        id: localStorage.getItem("id")

      });
      axios.get("http://localhost:5000/api/users/getuserclaim/" + localStorage.getItem('id')).then(resp => {
        setclaimuser(resp.data);
        let j = 1
        for (let i in resp.data) {

          claimUserString += "claim numb " + j + " is " + resp.data[i].description + " ";
          j++;

        }
        console.log(claimUserString);
        setreclamationUser(claimUserString);
      }).catch(err => {
        console.log(err);
      })


    }

    getclaimData();
  }, []
  );
  console.log(claimuser);
  console.log(claimUserString);

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

    axios.delete("http://localhost:5000/api/users/" + localStorage.getItem("id")).then(resp => {
      history.push({
        pathname: '/SignInPage',

      })
    }).catch(err => {
      console.log(err);
    })
  }

  /** loggedIn test */
  const loggedIn = useContext(AuthContext);

  let log = loggedIn.loggedIn;

  /** */
  return (
    <>
      <Container fluid>
        <Row className="rows">
          <Col sm={2} className="profile bg-c-lite-green">
            <div className="imag">
              <Image src={localStorage.getItem("image")} roundedCircle className="image1" />
              <h2>{localStorage.getItem("username")}</h2>
              {isAdmin && (
                <>
                <h3>Admin</h3>
                </>
              )
              }
              <hr className="hr" />
            </div>

            <Button variant="warning" onClick={editpage} className="border bg-c-lite-green border-dark btn-block">
              Edit Profil
            </Button>
            <Button variant="warning" onClick={deleteAccount} className="border bg-c-lite-green border-dark btn-block">
              delete your account
            </Button>
            {isAdmin && (
              <>
                <Button variant="warning" onClick={displayusers} className="border bg-c-lite-green border-dark btn-block">
                  display all users
            </Button>
                <Button variant="warning" onClick={displayRequestusers} className="border bg-c-lite-green border-dark btn-block">
                  users request
           </Button>
              </>
            )}
          </Col>
          <Col sm={10} className="all">
            <div className="container">
              <div className="main-body">




                <div className="row gutters-sm">
                  <div className="col-md-4 mb-2">
                    <div className="card2 ">
                      <div className="card2-body">
                        <div className="d-flex flex-column align-items-center text-center">
                          <img src={localStorage.getItem("image")} alt="Admin" className="rounded-circle " width="150" />
                          <div className="mt-3 align-items-center">
                            <h4>{localStorage.getItem("firstname")} {localStorage.getItem("lastname")}</h4>



                          </div>
                          <ul className="list-group list ">
                            <li className="list-group-item  d-flex justify-content-between align-items-center flex-wrap">
                              <h6>UserName</h6>
                              <span class="text-secondary">{localStorage.getItem("username")}</span>
                            </li>
                            <li className="list-group-item   d-flex justify-content-between align-items-center flex-wrap">
                              <h6>FirstName</h6>
                              <span class="text-secondary">{localStorage.getItem("firstname")}</span>
                            </li>
                            <li className="list-group-item  d-flex justify-content-between align-items-center flex-wrap">
                              <h6>LastName</h6>
                              <span class="text-secondary">{localStorage.getItem("lastname")}</span>
                            </li>
                            <li className="list-group-item  d-flex justify-content-between align-items-center flex-wrap">
                              <h6>Email</h6>
                              <span class="text-secondary">{localStorage.getItem("email")}</span>
                            </li>
                            <li className="list-group-item  d-flex justify-content-between align-items-center flex-wrap">
                              <h6>PhoneNumber</h6>
                              <span class="text-secondary">{localStorage.getItem("phoneNumber")}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-md-8 " >
                    <div className="card mb-3" style={{ marginTop: "50px" }}>
                      <div className="card-body ">
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Birthdate</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {localStorage.getItem("birthdate")}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">State</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {localStorage.getItem("address.state")}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">city</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {localStorage.getItem("address.city")}

                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Street</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {localStorage.getItem("address.street")}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Zip Code</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {localStorage.getItem("address.code")}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Identity card</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {localStorage.getItem("identityCard")}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3" style={{ marginTop: "2cm" }}>
                            <h6 className="mb-0">Cin Pictures</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <div class="col-md-6">
                              <Image src={localStorage.getItem("cin1")} style={{maxHeight:"7cm"}} className="image2 " />
                            </div>
                            <div class="col-md-5">
                              <Image src={localStorage.getItem("cin2")} style={{maxHeight:"7cm"}}  className="image2 " />
                            </div>
                          </div>
                        </div>
                        <hr />
                        <button className="btn btn-outline-primary" onClick={() => setButtonpopup(true)}>check reclam</button>
                        <QrCode trigger={buttonpopup} setTrigger={setButtonpopup}>
                          {claimUserString}
                        </QrCode>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/*  <div className="ProfileItem">
              <div class="row">
                <div class=" offset-md-4 col-md-4">
                  <div class="profile-img">
                    <img src={localStorage.getItem("image")} alt="Karan Singh Sisodia" style={{ maxHeight: "250px", minHeight: "250px", maxWidth: "200px" }} title="Karan Singh Sisodia" class="img-circle" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class=" offset-md-5 col-md-6">
                  <div class="profile-head">
                    <h1>
                      {localStorage.getItem("username")}
                    </h1>



                  </div>
                </div>
                <div class=" offset-md-2 col-md-6">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                    </li>

                  </ul>
                </div>
              </div>
              <div class="row">

                <div class="offset-md-2 col-md-8">
                  <div class="tab-content profile-tab" id="myTabContent" >
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div class="row">
                        <div class="col-md-6">
                          <h3>firstName</h3>
                        </div>
                        <div class="col-md-6">
                          <h3>{localStorage.getItem("firstname")}</h3>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-md-6">
                          <h3>lastName</h3>
                        </div>
                        <div class="col-md-6">
                          <h3>{localStorage.getItem("lastname")}</h3>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-md-6">
                          <h3>Email</h3>                                            </div>
                        <div class="col-md-6">
                          <h3>{localStorage.getItem("email")}</h3>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-md-6">
                          <h3>Phone</h3>
                        </div>
                        <div class="col-md-6">
                          <h3>{localStorage.getItem("phoneNumber")}</h3>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-md-6">
                          <h3>Address</h3>
                        </div>
                        <div class="col-md-6">
                          <h3>{localStorage.getItem("address.state") + "  ,  "}{localStorage.getItem("address.city") + "  ,  "}{localStorage.getItem("address.street")}</h3>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-md-6">
                          <h3>Birthdate</h3>
                        </div>
                        <div class="col-md-6">
                          <h3>{localStorage.getItem("birthdate")}</h3>
                   
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-md-6">
                          <Image src={localStorage.getItem("cin1")} className="image2 " />
                        </div>
                        <div class="col-md-6">
                          <Image src={localStorage.getItem("cin2")} className="image2 " />
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class=" offset-md-4 col-md-6">
                          <QRcode value={reclamationUser}
                            size={140}
                            level="H"
                            includeMargin={true}

                          />
                        </div>

                      </div>
                      <div class="row">

                     
                      </div>
                    </div>


                  </div>
                </div>

              </div>
            </div>
            */}
          </Col>

        </Row>
      </Container>

    </>
  );

};
export default ClientAdd;