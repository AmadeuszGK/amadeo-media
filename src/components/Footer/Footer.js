import React from "react";
import { Link } from "gatsby";
import './Footer.scss'

const Footer = () => (
  <footer>
    <Link className="skills-bottom-square" to="/#section__about">
      <div className="scroll-to-top">
        <div className="line-box">
          <div className="white-line" />
        </div>
      </div>
      <p>Top</p>
    </Link>

    <div className="footer-box">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Amadeo Media. All rights reserved
        </p>
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
            <Link className="footer-menu-item"  to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="footer-menu-item" to="/about-us">
              O nas
            </Link>
          </li>
          <li>
            <Link className="footer-menu-item" to="/contact">
              Kontakt
            </Link>
          </li>
          <li>
            <Link className="footer-menu-item" to="/#section__contact">
              <b>PL</b> EN DE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
