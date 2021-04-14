import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import "../checkout/Payement.css";

import { Col, Container, Row, Button, Collapse, Form } from "react-bootstrap";

import { Link } from "react-router-dom";

import BlackNav from "../Utils/Blacknav";
import { NavBar } from "../Utils/NavBar";
import "../Utils/NavBar.css";
import "../Utils/Blacknav.css";

export const PayementForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavBar />
      <BlackNav />
      <Container fluid="md" className="conteneur">
        <Row>
          <Col>
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <Icon.GeoAlt class="circle-icon  " style={{ color: "white" }} />
            <span class="vertical-line2" style={{ color: "grey" }} />
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <Icon.Truck class=" circle-icon " style={{ color: "white" }} />
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <span class="vertical-line2" style={{ color: "#fbbb0c" }}></span>
            <Icon.CreditCard
              class=" circle-icon-select "
              style={{ color: "white" }}
            />
            <span class="vertical-line2" style={{ color: "#fbbb0c" }}></span>
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <Icon.ClipboardCheck
              class="circle-icon "
              style={{ color: "white" }}
            />
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <h2>PAYEMENT METHOD :</h2>
            <div>
              <Button className="btnPay" variant="warning">
                On delivery payement
              </Button>
              <br />
              <br />

              <Button
                className="btnPay"
                variant="warning"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Online payement
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <Form>
                    <Row>
                      <Col>
                        <Form.Label>Email :*</Form.Label>
                        <Form.Control placeholder="Enter your Email..." />
                      </Col>
                      <Col>
                        <Form.Label>Expiration Date :*</Form.Label>
                        <Form.Control placeholder="Enter your Expiration Date.." />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Card name :*</Form.Label>
                        <Form.Control placeholder="Enter your Card name..." />
                      </Col>
                      <Col>
                        <Form.Label>CVV2 :*</Form.Label>
                        <Form.Control placeholder="Enter your CVV2.." />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Card Number :*</Form.Label>
                        <Form.Control placeholder="Enter your Card Number..." />
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Collapse>
            </div>
            <div className="btnn">
              <Link to="/delivery">
                <Button className="bt" variant="dark">
                  BACK
                </Button>
              </Link>
              <Link to="/checkout">
                <Button
                  style={{ backgroundColor: "#fbbb0c" }}
                  variant="warning"
                >
                  NEXT
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
