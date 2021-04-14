import React from "react";
import { Form, FormControl, Button, Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

import bosch from "../photos/bosch.png";
import cat from "../photos/cat.png";
import schneinder from "../photos/schneider.png";
import { Row } from "react-bootstrap";
import "./SponosorTab.css";

const SponsorTab = () => {
  return (
    <>
      <h2 className="title-products">OUR SPONSORS</h2>
      <div className="button-container">
        <Button variant="warning" className="button-add-product">
          Add Sponsor
        </Button>
        <Form className="search-product">
          <FormControl type="text" placeholder="Search for sponsor" />
        </Form>
      </div>
      <div className="container">
        <div className="row">
          <Table hover striped>
            <thead style={{ backgroundColor: "#fbbb0c" }}>
              <tr>
                <th scope="col">SPONSOR</th>
                <th scope="col">NAME</th>
                <th scope="col">REFERENCE</th>
                <th scope="col">PRICE</th>
                <th scope="col">PERIOD</th>

                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="image-container">
                  <img src={bosch} alt="" className="product-image" />
                </td>
                <td>
                  <h4>BOSCH </h4>
                </td>
                <td>0876123</td>
                <td>200 DT</td>
                <td>From : 12/04/2020 To : 12/05/2020</td>

                <td>
                  <FiEdit className="edit-icon" />
                </td>
                <td>
                  <Button variant="danger">
                    <BsFillTrashFill />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="image-container">
                  <img src={cat} alt="" className="product-image" />
                </td>
                <td>
                  <h4>CAT </h4>
                </td>
                <td>0876123</td>
                <td>200 DT</td>
                <td>From : 12/04/2020 To : 12/05/2020</td>

                <td>
                  <FiEdit className="edit-icon" />
                </td>
                <td>
                  <Button variant="danger">
                    <BsFillTrashFill />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="image-container">
                  <img src={schneinder} alt="" className="product-image" />
                </td>
                <td>
                  <h4>SCHNEIDER</h4>
                </td>
                <td>0876123</td>
                <td>200 DT</td>
                <td>From : 12/04/2020 To : 12/05/2020</td>

                <td>
                  <FiEdit className="edit-icon" />
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
    </>
  );
};

export default SponsorTab;
