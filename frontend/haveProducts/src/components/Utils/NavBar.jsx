import React from "react";
import { Navbar, Form, FormControl, Button, Container } from "react-bootstrap";
import Logo from "../../images/logo.png";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <Container>
      <Navbar variant="light">
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={Logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
          <span className="brand-name">Tooly</span>
        </Navbar.Brand>
        <Form className="mr-auto ml-5 search-bar">
          <FormControl type="text" placeholder="Search" />
        </Form>
        <Button variant="warning" className="navbar-buttons mr-4">
          Sign In
        </Button>
        <Button variant="warning" className="navbar-buttons">
          Sign Up
        </Button>
      </Navbar>
    </Container>
  );
};
