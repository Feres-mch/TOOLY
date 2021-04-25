import React from "react";
import "./BlackNavBar.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

const BlackNavBar = () => {
  return (
    <div className="tooly-nav-bar">
      <Link className="image" to="/">
        <img src={Logo} alt={Logo} />
      </Link>
      <ul>
        <li>
          <Link className="links" to="/">
            i have
          </Link>
        </li>
        <li>
          <Link className="links" to="/ihave">
            i want
          </Link>
        </li>
        <li>
          <Link className="links" to="/">
            contact us
          </Link>
        </li>
        <li>
          <Link className="links" to="/">
            profile
          </Link>
        </li>
        <li>
          <Link className="links" to="/">
            cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlackNavBar;
