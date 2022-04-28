import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer>
    <div className="container">
      <Link to="/" className="logo">
        Amadeo<span>Media.</span>
      </Link>
      <p className="text">© {new Date().getFullYear()} Amadeo Media. All rights reserved</p>
      <ul className="social-media">
        <li>
          <a href="mailto:grzesiak.amadeusz@gmail.com" className="social-link">
            <i className="uil uil-envelope-alt"></i>
          </a>
        </li>
        <li>
          <a href="tel:+48796536228" className="social-link">
            <i className="uil uil-phone-alt"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160" className="social-link">
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
