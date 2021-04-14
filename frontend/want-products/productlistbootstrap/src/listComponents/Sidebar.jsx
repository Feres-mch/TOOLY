import React, { Component } from "react";
import "./Sidebar.css";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <div className="sideContent">
          <h1>Brand</h1>
          <hr />
          <div className="push ">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1" checked>
                All
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Bosch
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Schneider{" "}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Ingco{" "}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                CAT{" "}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Brandt{" "}
              </label>
            </div>
          </div>
          <br />
          <h1>Price</h1>
          <hr />
          <br />

          <div className="slider range">
            <form className="multi-range-field ">
              <label>Price :</label>
              <input id="multi3" className="multi-range range" type="range" />
            </form>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Low to higher
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                High to lower
              </label>
            </div>
          </div>
          <div className="availability">
            <h1>Availability</h1>
            <hr />
            <label for="dateofbirth">Start date :</label> <br />
            <input
              type="date"
              name="dateofbirth"
              id="dateofbirth"
              className="datepicker"
            />
            <br />
            <label for="dateofbirth">End date :</label> <br />
            <input type="date" name="dateofbirth" id="dateofbirth" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
