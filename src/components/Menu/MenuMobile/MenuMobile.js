import React from 'react';
import { Link } from 'gatsby';

import linekdinWhite from '../../../images/linkedin-brands-white.png';
import facebookWhite from '../../../images/facebook-square-brands-white.png';
import phoneWhite from '../../../images/phone-solid-white.png';
import envelopeWhite from '../../../images/envelope-regular-white.png';

const MenuMobile = props => (
  // <nav className={this.state.showMenu ? "side-menu show" : "side-menu"}>
  <nav className="side-menu">
    <div className="menu-button" onClick={props.passedFunction}>
      <div id="nav-icon3" className={props.showMenu ? 'open' : ''}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>

    <ul>
      <li>
        <Link
          className="side-menu__button"
          to="/"
          onClick={props.passedFunction}
          activeStyle={{ fontFamily: 'Montserrat' }}
        >
          Strona główna
        </Link>
      </li>
      <li>
        <Link
          className="side-menu__button"
          to="/#section__offer"
          onClick={props.passedFunction}
          activeStyle={{ fontFamily: 'Montserrat' }}
        >
          Oferta i cennik
        </Link>
      </li>
      <li>
        <Link
          className="side-menu__button"
          to="/portfolio"
          onClick={props.passedFunction}
          activeStyle={{ fontFamily: 'Montserrat' }}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          className="side-menu__button"
          to="/about-us"
          onClick={props.passedFunction}
          activeStyle={{ fontFamily: 'Montserrat' }}
        >
          O mnie
        </Link>
      </li>
      <li>
        <Link
          className="side-menu__button"
          to="/contact"
          onClick={props.passedFunction}
          activeStyle={{ fontFamily: 'Montserrat' }}
        >
          Kontakt
        </Link>
      </li>
      <li>
        <div
          className="side-menu__button side-menu__language"
          to="/#section__contact"
          onClick={props.passedFunction}
          activeStyle={{ fontFamily: 'Montserrat' }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <p className="language__item language__item--pl language--active">PL</p>
          <p className="language__item language__item--en">EN</p>
          <p className="language__item language__item--de">DE</p>
        </div>
      </li>

      <div className="side-menu__bottom">
        <div className="side-menu-social">
          <a
            href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <img src={linekdinWhite} alt="linked" />
          </a>
          <a
            href="https://www.facebook.com/grzesiak.amadeusz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookWhite} alt="facebook" />
          </a>
        </div>
        <div className="side-menu__contact">
          <a href="tel:796536228">
            {' '}
            <img src={phoneWhite} alt="phone" />
            +48 796 536 228
          </a>
        </div>
        <div className="side-menu__contact">
          <a href="mailto:grzesiak.amadeusz@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={envelopeWhite} alt="email" />
            grzesiak.amadeusz@gmail.com
          </a>
        </div>
      </div>
    </ul>
  </nav>
);

export default MenuMobile;
