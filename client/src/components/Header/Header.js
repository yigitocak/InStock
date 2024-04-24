import { Link } from "react-router-dom";
import React from "react";
import Logo from "../../assets/logo/InStock-Logo_2x.png"

import "./Header.scss";

function Header() {

  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__logo-container">
          <Link to="/">
            <img src={Logo} className="navbar__img" alt="Instock" />
          </Link>
        </div>
        <div className="nav__links">
          <ul className="nav__list">
            <Link
              to="/warehouses"
              className="nav__link navbar__warehouses"
            >
              Warehouses
            </Link>
            <Link
              to="/inventories"
              className="nav__link navbar__inventory"
            >
              Inventory
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;