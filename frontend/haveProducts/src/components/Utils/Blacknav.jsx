import React, { Component } from "react";
import "./Blacknav.css";
import { Navbar, Container } from "react-bootstrap";

export class Blacknav extends Component {
  render() {
    return (
      <Navbar className="blacknav">
        <Container>
          <Navbar.Brand href="/" className="ml-4">
            <span className="brand-name">HOME</span>
          </Navbar.Brand>
          <div className="navbar-nav navbar-right">
            <a href="/Ihave" className="links mr-4 active-link">
              I HAVE
            </a>
            <a href="/Iwant" className="links mr-4">
              I WANT
            </a>
            <a href="/Contactus" className="links mr-5">
              CONTACT US
            </a>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default Blacknav;
