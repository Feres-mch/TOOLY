import React, { useEffect, useState } from "react";
import { Col, Button, Card, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./MyProducts.css";

const MyPorducts = () => {
  const [user_id, setuser_id] = useState("");
  const [products, setproducts] = useState([]);
  const [notfiltredproducts, setnotfiltredproducts] = useState([]);

  const history = useHistory();

  useEffect(() => {
    setuser_id("607e3725f430a2101068f1cf");
    const fetchdata = async () => {
      const { data } = await Axios.get(`/products/allproducts/${user_id}`);
      setproducts(data);
      setnotfiltredproducts(data);
    };
    fetchdata();
  }, [user_id]);

  const filterProductsByName = (e) => {
    if (e === "") setproducts([...notfiltredproducts]);
    else {
      setproducts(
        products.filter((product) => {
          if (product.name.includes(e)) return true;
          else return false;
        })
      );
    }
  };

  const filterProductsByBrand = (e) => {
    if (e === "") setproducts([...notfiltredproducts]);
    else {
      setproducts(
        products.filter((product) => {
          if (product.brand.includes(e)) return true;
          else return false;
        })
      );
    }
  };

  const filterProductsByCategory = (e) => {
    if (e === "") setproducts([...notfiltredproducts]);
    else {
      setproducts(
        products.filter((product) => {
          if (product.category.includes(e)) return true;
          else return false;
        })
      );
    }
  };

  const handlemoredetail = (id) => {
    history.push(`/ihave/details/${id}`);
  };

  const handleAddProduct = () => {
    history.push("/ihave/addproduct");
  };

  return (
    <>
      <Container fluid>
        <h1 className="myproducts-title">My products</h1>
        <div className="my-products-all-search-and-add-button">
          <input
            type="text"
            placeholder="Search By Name"
            className="myproducts-search"
            onChange={(e) => filterProductsByName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search By brand"
            className="myproducts-search"
            onChange={(e) => filterProductsByBrand(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search By category"
            className="myproducts-search"
            onChange={(e) => filterProductsByCategory(e.target.value)}
          />
          <Button
            variant="warning"
            className="my-products-button-add"
            onClick={() => handleAddProduct()}
          >
            Add New Porduct
          </Button>
        </div>

        <Row className="list-my-products">
          {products.map((product) => (
            <Col sm={3}>
              <Card className="card">
                <Card.Img
                  className="card-image"
                  variant="top"
                  src={product.image}
                />
                <Card.Body className="card-body">
                  <Card.Title className="card-labels">
                    name : {product.name}
                  </Card.Title>
                  <Card.Title className="card-labels">
                    reference : {product.reference}
                  </Card.Title>
                  <Card.Title className="card-labels">
                    brand : {product.brand}
                  </Card.Title>
                  <Card.Title className="card-labels">
                    category : {product.category}
                  </Card.Title>
                  <Card.Title className="card-labels">
                    Price : {product.price}
                  </Card.Title>
                  <Button
                    variant="warning"
                    className="card-button"
                    onClick={() => handlemoredetail(product._id)}
                  >
                    more details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MyPorducts;
