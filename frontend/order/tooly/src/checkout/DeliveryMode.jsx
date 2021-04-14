import React from "react";
import * as Icon from "react-bootstrap-icons";
import "../checkout/Delivery.css";
import { FaHandshake, FaTruck } from "react-icons/fa";

import { Col, Container, Row, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import BlackNav from "../Utils/Blacknav";
import { NavBar } from "../Utils/NavBar";
import "../Utils/NavBar.css";
import "../Utils/Blacknav.css";

export const DeliveryMode = () => {
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
            <span class="vertical-line2" style={{ color: "#fbbb0c" }}></span>
            <Icon.Truck
              class=" circle-icon-select "
              style={{ color: "white" }}
            />
            <span class="vertical-line2" style={{ color: "#fbbb0c" }}></span>
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <Icon.CreditCard class="circle-icon " style={{ color: "white" }} />
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <Icon.ClipboardCheck
              class="circle-icon "
              style={{ color: "white" }}
            />
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <h2>DELIVERY MODE :</h2>
            <div className="asba">
              <div>
                {" "}
                <h4>SHIPPING</h4>
                <Button className="btnPay" variant="warning">
                  <FaTruck className="Icon" />
                </Button>
                <small>(On delivery will cost you 7 Dt)</small>
              </div>
              <div>
                <h4>ONE TO ONE</h4>
                <Button className="btnPay" variant="outline-warning">
                  <FaHandshake className="Icon" />
                </Button>
              </div>
            </div>
            <div className="btnn">
              <Link to="/">
                <Button className="bt" variant="dark">
                  BACK
                </Button>
              </Link>
              <Link to="/payement">
                <Button variant="warning">NEXT</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
