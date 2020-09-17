import React from 'react';
import { Link } from 'gatsby';
import './Footer.scss';
import facebook from '../../images/facebook-square-brands.png';
import footerLogo from '../../images/agrzesiak-logo.png';

const Footer = () => (
  <footer>
    <Link className="footer__logo" to="/">
      <img src={footerLogo} alt="footer logo" />
    </Link>
    <div className="footerItem">
      <div className="footerItem__title">
        <p>MENU:</p>
      </div>
      <ul>
        <li>
          <Link className="footer-menu-item" to="/">
            Strona główna
          </Link>
        </li>
        <li>
          <Link className="footer-menu-item" to="/offer-and-pricing">
            Oferta i cennik
          </Link>
        </li>
        <li>
          <Link className="footer-menu-item" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="footer-menu-item" to="/about-us">
            O mnie
          </Link>
        </li>
        <li>
          <Link className="footer-menu-item" to="/contact">
            Kontakt
          </Link>
        </li>
        <li>
          <Link className="footer-menu-item" to="/privacy-policy">
            Polityka Prywatności
          </Link>
        </li>
      </ul>
    </div>

    <div className="footerItem">
      <div className="footerItem__title">
        <p>Amadeo Media:</p>
      </div>
      <ul>
        <li>
          <a className="footer-menu-item" href="tel:+48796536228">
            Tel: +48 796 536 228
          </a>
        </li>
        <li>
          <a className="footer-menu-item" href="mailto:grzesiak.amadeusz@gmail.com">
            E-mail: grzesiak.amadeusz@gmail.com
          </a>
        </li>
        <li>
          <div className="footer-menu-item" to="/">
            NIP: 613-158-39-85
          </div>
        </li>
        <li>
          <div className="footer-menu-item" to="/">
            REGON: 385730740
          </div>
        </li>
      </ul>
    </div>
    <div className="footerItem footerItem--nopadding">
      <div className="footerItem__title">
        <p>OBSERWUJ NAS!</p>
      </div>
      <div className="footerItem__social">
        <li className="social__item">
          <a href="https://www.facebook.com/grzesiak.amadeusz">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li className="social__item">
          <a href="https://www.facebook.com/grzesiak.amadeusz">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
      </div>
    </div>
    <div className="footer__absolute">
      <p>© {new Date().getFullYear()} Amadeo Media. All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
