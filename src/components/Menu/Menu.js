import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import logo from '../../images/agrzesiak-logo.png';
import LanguageMenu from '../LanguageMenu';

const Menu = () => {
  const [headerClassName, setHeaderClassName] = useState(null)

  const stickNavbar = () => {
    setHeaderClassName(window.pageYOffset > 0 ? "scrolled" : null);
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);
  
  return <header className={headerClassName}>
    <nav className="container">
    <Link className="logo" to="/">
        Amadeo<span>Media.</span>
      </Link>
      <div className="links">
        <ul>
          <li>
            <Link
            className="nav-link"
            to="/"
            activeClassName='active'
          >
            Strona główna
          </Link>
          </li>
          <li>
            <Link
            className="nav-link"
            to="/#section__offer"
            activeClassName='active'
          >
            Oferta
          </Link>
          </li>
          <li>
            <Link
            className="nav-link"
            to="/portfolio"
            activeClassName='active'
          >
            Portfolio
          </Link>
          </li>
          <li>
          <Link
            className="nav-link"
            to="/about-us"
            activeClassName='active'
          >
            O mnie
          </Link>
          </li>
          <li>
          <Link
            className="nav-link"
            to="/contact"
            activeClassName='active'
          >
            Kontakt
          </Link>
          </li>
        </ul>
        <i class="uil uil-moon toggle-btn"></i>
        <i class="uil uil-moon toggle-btn"><LanguageMenu /></i>
        
      </div>
      <div class="hamburger">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </nav>
  </header>
};

export default Menu;
