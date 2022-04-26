import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import LanguageMenu from '../LanguageMenu';

const Menu = () => {
  const [headerClassName, setHeaderClassName] = useState(null);

  const stickNavbar = () => {
    setHeaderClassName(window.pageYOffset > 0 ? 'scrolled' : null);
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const closeHamburgerMenu = () => {
    document.body.classList.remove('open');
    document.body.classList.remove('stopScrolling');
  };

  const toggleHamburgerMenu = () => {
    document.body.classList.toggle('open');
    document.body.classList.toggle('stopScrolling');
  };

  return (
    <header className={headerClassName}>
      <nav className="container">
        <Link className="logo" to="/">
          Amadeo<span>Media.</span>
        </Link>
        <div className="links">
          <ul>
            <li>
              <Link className="nav-link" to="/" activeClassName="active" onClick={closeHamburgerMenu}>
                Strona główna
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/#section__offer" activeClassName="active" onClick={closeHamburgerMenu}>
                Oferta
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/portfolio" activeClassName="active" onClick={closeHamburgerMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about-us" activeClassName="active" onClick={closeHamburgerMenu}>
                O mnie
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact" activeClassName="active" onClick={closeHamburgerMenu}>
                Kontakt
              </Link>
            </li>
          </ul>
          <i className="uil uil-moon toggle-btn"></i>
          <i className="uil uil-moon toggle-btn">
            <LanguageMenu />
          </i>
        </div>
        <div className="hamburger" onClick={toggleHamburgerMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
