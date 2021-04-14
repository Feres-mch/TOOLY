import React, { Component } from "react";
import "./Blacknav.css";
import { Navbar, Container } from "react-bootstrap";

export class Blacknav extends Component {
  render() {
    return (
      <Navbar className="blacknav ">
        <Container>
          <Navbar.Brand href="/">
            <span className="brand-name">HOME</span>
          </Navbar.Brand>
          <div className="navbar-nav navbar-right">
            <a href="/Ihave">I HAVE</a>
            <a href="/Iwant">I WANT</a>
            <a href="/Contactus">CONTACT US</a>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default Blacknav;
