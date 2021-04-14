import React, { Component } from "react";
import "./Details.css";
import { Container, Row, Col } from "react-bootstrap";
import drill from "../photos/drill.jpg";
import p2 from "../photos/p2.jpg";
import p3 from "../photos/p3.jpg";
import p4 from "../photos/p4.jpg";
import Rating from "./Rating.jsx";
import video from "../photos/video.mp4";
import Card from "../components/Card.jsx";

export class Details extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <div className="row">
            <div col-md-6>
              <Container className="conteneur">
                <Row className="firstRow">
                  <Col>
                    <img src={drill} alt="drill" className="mainImg" />
                  </Col>
                </Row>
                <Row className="seconRow">
                  <Col>
                    <img src={p2} alt="photo2" className="secondaryImg" />
                  </Col>
                  <Col>
                    {" "}
                    <img src={p3} alt="photo2" className="secondaryImg" />
                  </Col>
                  <Col>
                    {" "}
                    <img src={p4} alt="photo2" className="secondaryImg" />
                  </Col>
                  <Col>
                    {" "}
                    <img src={drill} alt="photo2" className="secondaryImg" />
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="col-md-6 rightcontainer">
              <Rating />
              <p>
                <small>(48 Reviews)</small>
              </p>
              <h1>Black Decker</h1>
              <h3>BD45GH-RR23</h3>
              <p>Product Name : Drill</p>
              <p>Reference : BD45GH-RR23</p>
              <p>Category : Dockyard</p>
              <p>Price : 25 Dt/Day</p>
              <br />
              <div className="card text-center yellowcard12">
                <div className="card-body">
                  <p className="card-text">
                    <Container>
                      <div className="row">
                        <div className="col-md-4">
                          <label for="dateofbirth">Start date :</label> <br />
                          <input
                            type="date"
                            name="dateofbirth"
                            id="dateofbirth"
                            className="datepicker"
                          />
                        </div>
                        <div className="col-md-4">
                          <label for="dateofbirth">End date :</label> <br />
                          <input
                            type="date"
                            name="dateofbirth"
                            id="dateofbirth"
                            className="datepicker"
                          />
                          <div class="vl"></div>
                        </div>
                        <div className="col-md-4">
                          <p className="price">25 Dt</p>
                        </div>
                      </div>
                    </Container>
                    <h1>AVAILABLE</h1>
                  </p>
                  <button className="addtocart"> ADD TO CART</button>
                </div>
              </div>
              <hr className="hr" />
              <p>
                Ergonomic, eco-friendly and cheap. This is what you're looking
                for !
              </p>
            </div>
          </div>
        </Container>
        <br />
        <Container fluid>
          <Row>
            <Col xs={{ order: "last" }}>
              <hr className="hrtutorial" />
            </Col>
            <Col xs lg="2" className="titlewords">
              TUTORIAL
            </Col>
            <Col xs={{ order: "first" }}>
              <hr className="hrtutorial" />
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="row">
            <Col md={{ span: 6, offset: 3 }}>
              <div class="embed-responsive embed-responsive-16by9 tutorial">
                <iframe
                  class="embed-responsive-item"
                  src={video}
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
          </div>
        </Container>
        <br />
        <Container fluid>
          <Row>
            <Col xs={{ order: "last" }}>
              <hr className="hrtutorial" />
            </Col>
            <Col xs className="titlewords">
              SIMILAR PRODUCTS
            </Col>
            <Col xs={{ order: "first" }}>
              <hr className="hrtutorial" />
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <div className="row">
            <Col sm>
              {" "}
              <Card />{" "}
            </Col>
            <Col sm>
              <Card />
            </Col>
            <Col sm>
              <Card />
            </Col>
          </div>
        </Container>
      </div>
    );
  }
}

export default Details;
