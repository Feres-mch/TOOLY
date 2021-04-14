import React from "react";
import * as Icon from "react-bootstrap-icons";
import "../checkout/Adresse.css";

import { Col, Container, Row, Button, Form } from "react-bootstrap";

import { Link } from "react-router-dom";

import BlackNav from "../Utils/Blacknav";
import { NavBar } from "../Utils/NavBar";
import "../Utils/NavBar.css";
import "../Utils/Blacknav.css";

export const AddressForm = () => {
  return (
    <>
      <NavBar />
      <BlackNav />
      <Container fluid="md" className="conteneur">
        <Row>
          <Col>
            <span class="vertical-line2" style={{ color: "#fbbb0c" }}></span>
            <Icon.GeoAlt
              class="circle-icon-select "
              style={{ color: "white" }}
            />
            <span class="vertical-line2" style={{ color: "#fbbb0c" }} />
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <Icon.Truck class="circle-icon " style={{ color: "white" }} />
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <Icon.CreditCard class="circle-icon " style={{ color: "white" }} />
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <Icon.ClipboardCheck
              class="circle-icon "
              style={{ color: "white" }}
            />
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <h2>SHIPPING ADRESS :</h2>
            <Form>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Ariana</option>
                    <option>Beja</option>
                    <option>Ben Arous</option>
                    <option>Bizerte</option>
                    <option>Gabes</option>
                    <option>Gafsa</option>
                    <option>Jendouba</option>
                    <option>Kairouan</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>
            </Form>
            <div className="btnn">
              <Link to="/delivery">
                <Button variant="warning">NEXT</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
