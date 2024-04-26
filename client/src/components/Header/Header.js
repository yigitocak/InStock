import { NavLink } from "react-router-dom";
import React from "react";
import Logo from "../../assets/logo/InStock-Logo_1x.png"

import "./Header.scss";

function Header() {

  return (
    <div className="nav">
      <div className="nav__container">
          <NavLink to="/">
            <img src={Logo} className="nav__img" alt="Instock" />
          </NavLink>
        <div className="nav__links">
          <ul className="nav__list">
            <li>
              <NavLink
                to="/"
                className="nav__item"
                activeClassName="nav__item--active"
              >
                Warehouses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inventory"
                className="nav__item"
                activeClassName="nav__item--active"
              >
                Inventory
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;