import React from "react";
import { Link } from "gatsby"
import logo from "../images/agrzesiak-logo.png"

const MenuDesktop = () => (
<div className="menu-desktop">
      <div className="menu-dekstop__content">
      <Link className="menu-dekstop__item top-logo" to="/">
        <img src={logo} alt="amadeo media"></img>
        </Link>
        <ul>
        <li>
            <Link className="menu-dekstop__item" to="/">
              Strona główna
            </Link>
          </li>
          <li>
            <Link className="menu-dekstop__item" to="/offer-and-pricing">
              Oferta i cennik
            </Link>
          </li>
          <li>
            <Link className="menu-dekstop__item"  to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="menu-dekstop__item" to="/about-us">
              O nas
            </Link>
          </li>
          <li>
            <Link className="menu-dekstop__item" to="/contact">
              Kontakt
            </Link>
          </li>
          <li>
            <Link className="menu-dekstop__item" to="/#section-contact">
              <b>PL</b> EN DE
            </Link>
          </li>
        </ul>
      </div>
    </div>
);


export default MenuDesktop;
