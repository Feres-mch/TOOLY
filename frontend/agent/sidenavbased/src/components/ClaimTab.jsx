import React from "react";
import { Form, FormControl, Button, Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import "./SponosorTab.css";

const SponsorTab = () => {
  return (
    <>
      <h2 className="title-products">CLaims</h2>
      <div className="button-container">
        <Button variant="warning" className="button-add-product">
          Search
        </Button>
        <Form className="search-product">
          <FormControl type="text" placeholder="Search for claim" />
        </Form>
      </div>
      <div className="container">
        <div className="row">
          <Table hover striped>
            <thead style={{ backgroundColor: "#fbbb0c" }}>
              <tr>
                <th scope="col">REFERENCE</th>
                <th scope="col">USER</th>
                <th scope="col">Description</th>
                <th scope="col">DATE</th>
                <th scope="col">RESOLVE</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GH-232355</td>
                <td>606d559a4626c6443c745f30</td>
                <td>
                  i think that the product with reference xxxx have a cost to
                  much expen...
                </td>
                <td>2021-04-07</td>
                <td>resolved</td>

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
                <td>GH-232355</td>
                <td>606dz59a4a26c622e745g511</td>
                <td>
                  i didn't found what i need ,you need to add more products and
                  categori...
                </td>
                <td>2021-04-07</td>
                <td>notresolved</td>

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
                <td>GH-232355</td>
                <td>606d559a4626c6443c745f2f</td>
                <td>
                  i think that the product with reference xxxx have a cost to
                  much expen...
                </td>
                <td>2021-04-07</td>
                <td>notresolved</td>

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
