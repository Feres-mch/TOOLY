import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductAdd.css";
import Logo from "../../images/logogrand.png";

const ProductAdd = () => {
  return (
    <>
      <Container>
        <Form className="formulaire">
          <div className="form-first-part">
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Reference</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Categories</Form.Label>
              <Form.Control as="select" defaultValue="Gardering">
                <option>Gardering</option>
                <option>Electricity</option>
                <option>Plombry</option>
                <option>DIY</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Price per day</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="6" />
            </Form.Group>
          </div>
          <div className="form-second-part">
            <div className="form-sedonc-part-sub-one">
              <Form.Group>
                <Form.Label>Principal photo</Form.Label>
                <Form.File />
              </Form.Group>
              <Form.Group>
                <Form.Label>Second photo</Form.Label>
                <Form.File />
              </Form.Group>
              <Form.Group>
                <Form.Label>Third photo</Form.Label>
                <Form.File />
              </Form.Group>
              <Form.Group>
                <Form.Label>Fourth photo</Form.Label>
                <Form.File />
              </Form.Group>
              <Form.Group>
                <Form.Label>Video link</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <div className="image-formulaire-container">
              <img src={Logo} alt="" className="image-formulaire" />
            </div>
            <div className="form-sedonc-part-sub-two">
              <Link to="/">
                <Button variant="dark" className="buttons">
                  Back
                </Button>
              </Link>
              <Button variant="warning" className="buttons">
                Add Product
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default ProductAdd;
