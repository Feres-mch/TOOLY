import React from "react";
import {
  Form,
  FormControl,
  Button,
  Table,
  Container,
  Col,
} from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import "./ProductHave.css";
import Test1 from "../../images/test1.jpg";
import Test2 from "../../images/test2.jpg";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <>
      <h2 className="title-products">Your Products</h2>
      <div className="button-container">
        <Form className="search-product">
          <FormControl type="text" placeholder="Search for product" />
        </Form>
        <Link to="add">
          <Button variant="warning" className="button-add-product">
            Add Product
          </Button>
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <Table hover striped>
            <thead style={{ backgroundColor: "#fbbb0c" }}>
              <tr>
                <th scope="col">ITEM</th>
                <th scope="col">NAME</th>
                <th scope="col">REFERENCE</th>
                <th scope="col">PRICE</th>
                <th scope="col">LOANED</th>
                <th scope="col">RATING</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="image-container">
                  <img src={Test1} alt="" className="product-image" />
                </td>
                <td>
                  <h4>ELECTRIC WHEELBARROW </h4>
                </td>
                <td>0876123</td>
                <td>59 DT</td>
                <td>12</td>
                <td>200DT</td>
                <td>
                  <Link>
                    <FiEdit className="edit-icon" />
                  </Link>
                </td>
                <td>
                  <Button variant="danger">
                    <BsFillTrashFill />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="image-container">
                  <img src={Test2} alt="" className="product-image" />
                </td>
                <td>
                  <h4>ELECTRIC WHEELBARROW </h4>
                </td>
                <td>0876123</td>
                <td>59 DT</td>
                <td>12</td>
                <td>200DT</td>
                <td>
                  <Link>
                    <FiEdit className="edit-icon" />
                  </Link>
                </td>
                <td>
                  <Button variant="danger">
                    <BsFillTrashFill />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="image-container">
                  <img src={Test1} alt="" className="product-image" />
                </td>
                <td>
                  <h4>ELECTRIC WHEELBARROW </h4>
                </td>
                <td>0876123</td>
                <td>59 DT</td>
                <td>12</td>
                <td>200DT</td>
                <td>
                  <Link>
                    <FiEdit className="edit-icon" />
                  </Link>
                </td>
                <td>
                  <Button variant="danger">
                    <BsFillTrashFill />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="image-container">
                  <img src={Test2} alt="" className="product-image" />
                </td>
                <td>
                  <h4>ELECTRIC WHEELBARROW </h4>
                </td>
                <td>0876123</td>
                <td>59 DT</td>
                <td>12</td>
                <td>200DT</td>
                <td>
                  <Link>
                    <FiEdit className="edit-icon" />
                  </Link>
                </td>
                <td>
                  <Button variant="danger">
                    <BsFillTrashFill />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="image-container">
                  <img src={Test1} alt="" className="product-image" />
                </td>
                <td>
                  <h4>ELECTRIC WHEELBARROW </h4>
                </td>
                <td>0876123</td>
                <td>59 DT</td>
                <td>12</td>
                <td>200DT</td>
                <td>
                  <Link>
                    <FiEdit className="edit-icon" />
                  </Link>
                </td>
                <td>
                  <Button variant="danger">
                    <BsFillTrashFill />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <Container fluid className="statistique-container">
        <Row>
          <Col>
            <div className="statistique-shape">
              <h2>NUMBER OF PRODUCTS</h2>
              <span className="statistique-result">5</span>
            </div>
          </Col>
          <Col>
            <div className="statistique-shape">
              <h2>NUMBER OF CLIENTS</h2>
              <span className="statistique-result">8</span>
            </div>
          </Col>
          <Col>
            <div className="statistique-shape">
              <h2>TOTAL REVENUES</h2>
              <span className="statistique-result">3200 Dt</span>
            </div>
          </Col>
          <Col>
            <div className="statistique-shape">
              <h2>RECOMMENDED BY</h2>
              <span className="statistique-result">80%</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
