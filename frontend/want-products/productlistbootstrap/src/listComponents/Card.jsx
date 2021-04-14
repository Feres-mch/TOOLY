import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import drill from "../photos/drill.jpg";
import "../App.css";
import { Link } from "react-router-dom";

export class Productcard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }} className="card  border-warning ">
          <Card.Img variant="top" src={drill} />
          <Card.Body>
            <Card.Title>Name : DRILL</Card.Title>
            <Card.Text>
              <p>Brand : BOSCH</p>
              <p>Ref : 1006GH2</p>
              <p>Power : 12V</p>
              <p>Price : 10Dt/ Day </p>
            </Card.Text>
            <Link to="/details">
              <Button variant="warning" className="listbtn col-12">
                SHOW DETAILS
              </Button>{" "}
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Productcard;
