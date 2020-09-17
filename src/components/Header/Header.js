import React from 'react';
import { Link } from 'gatsby';
import arrowsWhite from '../../images/arrows-white.svg';
import MenuDesktop from '../Menu/MenuDesktop/MenuDesktop';
import './Header.scss';
import ButtonLink from '../Button/ButtonLink';
import headerImg from '../../images/amadeusz-pic-1.png';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Header = () => (
  <header>
    <MenuDesktop />

    <div className="canvas__container">
      <div className="header__bg--bottom">
        <img src={headerImg} alt="header img" />
      </div>
      <div className="canvas-text">
        <p>Nowa jakość w tworzeniu internetowej treści.</p>
        {/* <h2>{headerText}</h2> */}
        <h1>NOWOCZESNE STRONY I SKLEPY INTERNETOWE</h1>
        <ButtonLink text="PORTFOLIO" href="/portfolio" class="button button--alert" />
      </div>
      <Link className="scroll-down" to="/#section__offer">
        <div className="scroll-down__container">
          <img src={arrowsWhite} alt="arrow" />
        </div>
      </Link>
    </div>
  </header>
);

export default Header;
