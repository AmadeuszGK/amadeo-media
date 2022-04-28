import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import LanguageMenu from '../LanguageMenu';
import UilMoon from '@iconscout/react-unicons/icons/uil-moon';
import UilSun from '@iconscout/react-unicons/icons/uil-sun';

const Menu = () => {
  const [headerClassName, setHeaderClassName] = useState(null);
  const [isDark, setIsDark] = useState(false);

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

  useEffect(() => {
    localStorage.getItem('dark') && setIsDark(localStorage.getItem('dark') === '1' ? true : false);
    localStorage.getItem('dark') === '1' ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }, []);

  const changeTheme = () => {
    if (!isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('dark', '1');
      setIsDark(true);
    } else if (isDark) {
      document.body.classList.remove('dark');
      localStorage.setItem('dark', '0');
      setIsDark(false);
    }
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
              <Link className="nav-link" to="/o-mnie" activeClassName="active" onClick={closeHamburgerMenu}>
                O mnie
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/#oferta" activeClassName="active" onClick={closeHamburgerMenu}>
                Oferta
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/#portfolio" activeClassName="active" onClick={closeHamburgerMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/#kontakt" activeClassName="active" onClick={closeHamburgerMenu}>
                Kontakt
              </Link>
            </li>
          </ul>
          <div className="toggle-btn" onClick={() => changeTheme()}>
            {isDark ? <UilSun size={17} /> : <UilMoon size={17} />}
          </div>
          <LanguageMenu />
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
