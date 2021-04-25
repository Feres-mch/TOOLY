import React, { useEffect, useState } from "react";
import MyProduct from "../myproduct/MyProduct";
import { Button, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./MyProducts.css";

const MyPorducts = () => {
  const [user_id, setuser_id] = useState("607e3725f430a2101068f1cf");
  const [products, setproducts] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const source = Axios.CancelToken.source();

    const fetchdata = async () => {
      try {
        const { data } = await Axios.get(`/products/allproducts/${user_id}`, {
          cancelToken: source.token,
        });
        setproducts(data);
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log("component will unmount");
        } else {
          throw error;
        }
      }
    };

    fetchdata();

    return () => {
      source.cancel();
    };
  });

  const handleEditProduct = (id) => {
    history.push(`/ihave/details/${id}`);
  };

  const handleAddProduct = () => {
    history.push("/ihave/addproduct");
  };

  const handleDeleteProduct = async (id) => {
    await Axios.put(`/products/delete/${id}`);
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
          />
          <input
            type="text"
            placeholder="Search By brand"
            className="myproducts-search"
          />
          <input
            type="text"
            placeholder="Search By category"
            className="myproducts-search"
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
            <MyProduct
              key={product._id}
              product={product}
              handleEditProduct={handleEditProduct}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MyPorducts;
