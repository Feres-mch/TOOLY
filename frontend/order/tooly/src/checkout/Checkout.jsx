import React from "react";
import * as Icon from "react-bootstrap-icons";
import "../checkout/Checkout.css";

import { Col, Container, Row, Button, Table } from "react-bootstrap";

import { CgArrowLongRightL } from "react-icons/cg";

import { Link } from "react-router-dom";

import BlackNav from "../Utils/Blacknav";
import { NavBar } from "../Utils/NavBar";
import "../Utils/NavBar.css";
import "../Utils/Blacknav.css";

export const Checkout = () => {
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
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <Icon.CreditCard class="circle-icon" style={{ color: "white" }} />
            <span class="vertical-line2" style={{ color: "grey" }}></span>
            <span class="vertical-line2" style={{ color: "#fbbb0c" }}></span>
            <Icon.ClipboardCheck
              class=" circle-icon-select "
              style={{ color: "white" }}
            />
            <span class="vertical-line2" style={{ color: "#fbbb0c" }}></span>
            <h2>ORDER REVIEW :</h2>
            <Table className="table ">
              <thead style={{ backgroundColor: "#fbbb0c" }}>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">PERIOD</th>
                  <th scope="col">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h4>ELECTRIC WHEELBARROW </h4>
                  </td>
                  <td>59 DT</td>
                  <td>
                    01/03/21 <CgArrowLongRightL /> 05/03/21
                  </td>
                  <td>200DT</td>
                </tr>
                <tr>
                  <td>
                    <h4>BROKK 160</h4>
                  </td>
                  <td>59 DT</td>
                  <td>
                    01/03/21 <CgArrowLongRightL /> 05/03/21
                  </td>
                  <td>200DT </td>
                </tr>

                <tr>
                  <td>
                    <h6>Delivery Fees</h6>
                  </td>
                  <td></td>
                  <td></td>
                  <td>7 DT</td>
                </tr>
                <tr>
                  <td>TOTAL</td>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>407 DT</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h4 className="tdd">SHIPPING</h4>
                    <p>Azza Kbaier Baghdadi</p>
                    <p>Fouk el Koucha,Ariana soghra</p>
                    <p>Ariana,8000,Tunisia</p>
                  </td>

                  <td colSpan="2">
                    <h4 className="tdd">PAYEMENT</h4>
                    <p>Card type : Visa</p>
                    <p>Card holder: Azza Kbaier</p>
                    <p>Card Num: xxxx-xxxx-1235</p>
                    <p>Exp date: 03/2025</p>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h4>DATE :</h4>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>02/04/2021</h5>
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="btnn">
              <Link to="/payement">
                <Button className="bt" variant="dark">
                  BACK
                </Button>
              </Link>
              <Link to="/">
                <Button variant="warning">CONFIRM</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
