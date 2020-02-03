import React from 'react';
import { Link } from 'gatsby';
import logo from '../../../images/agrzesiak-logo.png';

const MenuDesktop = () => (
  <div className="menu-desktop">
    <nav className="menu-dekstop__content">
      <Link className="menu-dekstop__item top-logo" to="/">
        <img src={logo} alt="amadeo media" />
      </Link>
      <ul>
        <li>
          <Link
            className="menu-dekstop__item"
            to="/"
            activeStyle={{ fontFamily: 'Montserrat Bold' }}
          >
            Strona główna
          </Link>
        </li>
        <li>
          <Link
            className="menu-dekstop__item"
            to="/offer-and-pricing"
            activeStyle={{ fontFamily: 'Montserrat Bold' }}
          >
            Oferta i cennik
          </Link>
        </li>
        <li>
          <Link
            className="menu-dekstop__item"
            to="/portfolio"
            activeStyle={{ fontFamily: 'Montserrat Bold' }}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className="menu-dekstop__item"
            to="/about-us"
            activeStyle={{ fontFamily: 'Montserrat Bold' }}
          >
            O nas
          </Link>
        </li>
        <li>
          <Link
            className="menu-dekstop__item"
            to="/contact"
            activeStyle={{ fontFamily: 'Montserrat Bold' }}
          >
            Kontakt
          </Link>
        </li>
        <li>
          <div className="menu-dekstop__item language__wrapper">
            <p className="language__item language__item--pl language--active">PL</p>
            <p className="language__item language__item--en">EN</p>
            <p className="language__item language__item--de">DE</p>
          </div>
        </li>
      </ul>
    </nav>
  </div>
);

export default MenuDesktop;
