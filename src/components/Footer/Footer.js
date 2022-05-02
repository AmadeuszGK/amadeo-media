import React from 'react';
import { Link } from 'gatsby';
import UilPhoneAlt from '@iconscout/react-unicons/icons/uil-phone-alt';
import UilEnvelopeAlt from '@iconscout/react-unicons/icons/uil-envelope-alt';
import UilLinkedinAlt from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => (
  <footer>
    <div className="container">
      <Link to="/" className="logo">
        Amadeo<span>Media.</span>
      </Link>
      <p className="text">© {new Date().getFullYear()} Amadeo Media. All rights reserved</p>
      <ul className="social-media">
        <li>
          <a href="mailto:grzesiak.amadeusz@gmail.com" className="social-link" aria-label="email">
            <UilEnvelopeAlt size="16" />
          </a>
        </li>
        <li>
          <a href="tel:+48796536228" className="social-link" aria-label="phone">
            <UilPhoneAlt size="16" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160" className="social-link" aria-label="linkedin">
            <UilLinkedinAlt size="16" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
