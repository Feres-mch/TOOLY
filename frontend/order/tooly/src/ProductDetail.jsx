import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../src/Productdetail.css";
import { BsFillTrashFill } from "react-icons/bs";
import { CgArrowLongRightL } from "react-icons/cg";
import BlackNav from "./Utils/Blacknav";
import { NavBar } from "./Utils/NavBar";
import "./Utils/NavBar.css";
import "./Utils/Blacknav.css";

import { Link } from "react-router-dom";

export const ProductDetail = () => {
  return (
    <>
      <NavBar />
      <BlackNav />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Table hover className="table table-image ">
              <thead style={{ backgroundColor: "#fbbb0c" }}>
                <tr>
                  <th scope="col">ITEM</th>
                  <th scope="col">NAME</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">PERIOD</th>
                  <th scope="col">TOTAL</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-25 p-3">
                    <img
                      src="https://www.rslocation.com/uploads/1536924890446-brouette-electrique-pro-400kg-de-cmu-mt500s-alitrak-6100271--1-.jpg"
                      className="img-fluid img-thumbnail"
                      alt=""
                    />
                  </td>
                  <td>
                    <h4>ELECTRIC WHEELBARROW </h4>
                    <br />
                    <h6>300KG PAYLOAD</h6>
                  </td>
                  <td>59 DT</td>
                  <td>
                    01/03/21 <CgArrowLongRightL /> 05/03/21
                  </td>
                  <td>200DT</td>
                  <td>
                    <Button variant="danger">
                      <BsFillTrashFill />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="w-25 p-3">
                    <img
                      src="https://www.rslocation.com/uploads/1570098914866-brok160.jpg"
                      className="img-fluid img-thumbnail"
                      alt=""
                    />
                  </td>
                  <td>
                    <h4>BROKK 160</h4>
                  </td>
                  <td>59 DT</td>
                  <td>
                    01/03/21 <CgArrowLongRightL /> 05/03/21
                  </td>
                  <td>200DT </td>
                  <td>
                    <Button variant="danger">
                      <BsFillTrashFill />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="w-25 p-3"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>600 DT</h5>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <div className="btnn">
              <Button className="bt" variant="dark">
                CLEAR ALL
              </Button>
              <Link to="/Adresse">
                <Button variant="warning">ORDER</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
