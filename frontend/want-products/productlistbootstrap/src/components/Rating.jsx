import React, { Component } from "react";
import "./Rating.css";

export class Rating extends Component {
  render() {
    return (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
      </div>
    );
  }
}

export default Rating;
