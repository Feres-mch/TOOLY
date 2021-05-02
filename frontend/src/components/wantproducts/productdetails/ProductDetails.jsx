import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setproduct] = useState({});

  useEffect(() => {
    const source = Axios.CancelToken.source();
    const fetchdata = async () => {
      try {
        const { data } = await Axios.get(`/products/productdetails/${id}`, {
          cancelToken: source.token,
        });
        setproduct(data);
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log(error);
        } else {
          throw error;
        }
      }
    };

    fetchdata();
    return () => {
      source.cancel();
    };
  }, [id]);

  return (
    <div>
      <Container fluid className="conteneur">
        <Row>
          <Col className="md-6">
            <Container>
              <Row className="image-first-row">
                <Col>
                  <img src={product.img2} alt="2" className="mainImg" />
                </Col>
              </Row>
              <Row className="image-second-row">
                <Col>
                  <img src={product.img2} alt="2" className="secondaryImg" />
                </Col>
                <Col>
                  <img src={product.img3} alt="3" className="secondaryImg" />
                </Col>
                <Col>
                  <img src={product.img4} alt="4" className="secondaryImg" />
                </Col>
                <Col>
                  <img src={product.img1} alt="img1" className="secondaryImg" />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="md-6 rightcontainer">
            <h1>
              {" "}
              <big>BRAND :</big> {product.brand}
            </h1>
            <h3>
              {" "}
              <big>REFERENCE :</big> {product.reference}{" "}
            </h3>
            <p>
              {" "}
              <big>NAME :</big> {product.name}{" "}
            </p>
            <p>
              {" "}
              <big>CATEGORY :</big> {product.category}
            </p>
            <p>
              {" "}
              <big>PRICE :</big> {product.pricePerDay} Dt/Day{" "}
            </p>
            <Card className="text-center bg-warning yellowcard12">
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row>
                      <Col className="md-4">
                        <label htmlFor="startDate">Start Date :</label> <br />
                        <input
                          type="date"
                          name="startDate"
                          id="startDate"
                          className="datepicker"
                        />
                      </Col>
                      <Col className="md-4">
                        <label htmlFor="endDate">End Date :</label> <br />
                        <input
                          type="date"
                          name="endDate"
                          id="endDate"
                          className="datepicker"
                        />
                        <div className="vl"></div>
                      </Col>

                      <Col className="md-4">
                        <p className="price">{product.pricePerDay} Dt/Day </p>
                      </Col>
                    </Row>
                  </Container>

                  <button className="addtocart ">ADD TO CART</button>
                </Card.Text>
              </Card.Body>
            </Card>
            <hr className="hr" />
            <p> {product.description} </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
