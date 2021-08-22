import React, { useState, useContext } from "react";

import "./profil.css";
import AuthContext from "../components/testAuth";
import {
  Container,
  Col,
  Row,
  Image,
  Button,


} from "react-bootstrap";
import axios from 'axios';


import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router-dom";

import UserRequestDetails from "./UserRequestDetails"
const UserRequest = (props) => {



  let Requestusers = props.location.state;
  console.log(Requestusers)
  /**  test is admin*/
  let usertype = localStorage.getItem("type");
  let isAdmin;
  if (usertype === "admin") {
    isAdmin = true;
  } else {
    isAdmin = false;
  }

  const history = useHistory();
  /** link to edit profil page */
  function editpage() {
    history.push({
      pathname: '/editpage',
      state: props.location.state // your data array of objects
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
  /** get all users */
  /** lik to display all users */
  let [alluser, setAlluser] = useState();
 let [buttonpopup , setButtonpopup] = useState(false);
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

  /** is loggedin test */
  const loggedIn = useContext(AuthContext);

  let log = loggedIn.loggedIn;

  /** */
  /**head style of table  */
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
/** */ const classes = useStyles();
  return (
    <>
      <Container fluid>
        <Row className="rows">
          <Col sm={2} className="profile">
            <div className="imag">
              <Image src={localStorage.getItem("image")} roundedCircle className="image1" />
              <h2>{localStorage.getItem("username")}</h2>

              <hr className="hr" />
            </div>

            <Button variant="warning" onClick={editpage} className="border border-dark btn-block">
              Edit Profil
            </Button>
            <Button variant="warning" onClick={deleteAccount} className="border border-dark btn-block">
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
            <Row className="titre">
              <h1> All Users</h1>
            </Row>
            <Row className="donnee">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>image</StyledTableCell>
                      <StyledTableCell>username</StyledTableCell>
                      <StyledTableCell align="right">firstName</StyledTableCell>
                      <StyledTableCell align="right">lastName</StyledTableCell>
                      <StyledTableCell align="right">email</StyledTableCell>
                      <StyledTableCell align="right">adresse</StyledTableCell>
                      <StyledTableCell align="right">phone number</StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Requestusers.map((allusers, index) => (
                      <StyledTableRow >
                        <StyledTableCell component="th" scope="row">
                          <Image src={allusers.images.profileImage} roundedCircle className="img2" />

                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {allusers.userName}
                        </StyledTableCell>
                        <StyledTableCell align="right"> {allusers.firstName}</StyledTableCell>
                        <StyledTableCell align="right"> {allusers.lastName}</StyledTableCell>
                        <StyledTableCell align="right"> {allusers.email}</StyledTableCell>
                        <StyledTableCell align="right"> {allusers.address.state + " , " + allusers.address.city + " , " + allusers.address.street}</StyledTableCell>
                        <StyledTableCell align="right"> {allusers.phoneNumber}</StyledTableCell>
                        <StyledTableCell align="right"> <Button variant="warning" onClick={() => acceptuser(allusers.email)} className="border border-dark btn-block">
                          Accepte
                        </Button>
                        
                        </StyledTableCell>
                        <StyledTableCell align="right"> <Button variant="warning" onClick={()=> setButtonpopup(true)} className="border border-dark btn-block">
                          details
                        </Button>
                        <UserRequestDetails trigger={buttonpopup} setTrigger ={setButtonpopup}>
                         {allusers}
                        </UserRequestDetails>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>


            </Row>
          </Col>
        </Row>
      </Container>

    </>
  );
  /***accepte user */
  function acceptuser(email) {

    axios.put("http://localhost:5000/api/users/acceptRequest/" + email).then(resp => {

      history.push({
        pathname: '/profil',

      });
    }).catch(err => {
      console.log(err);
    })


    alert(email)

  };

};
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};
export default UserRequest;