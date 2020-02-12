import React from 'react';
import { Link } from 'gatsby';
import arrowsWhite from '../../images/arrows-white.svg';
import MenuDesktop from '../Menu/MenuDesktop/MenuDesktop';
import './Header.scss';
import ButtonLink from '../Button/ButtonLink';
import headerImg from '../../images/amadeusz-pic-1.png';
import ScrollAnimation from 'react-animate-on-scroll';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Header = () => (
  <header style={{ height: 100 + 'vh' }}>
    <MenuDesktop />

    <div className="canvas__container">
      <ScrollAnimation
        animateIn="slideInRight"
        delay={100}
        animateOnce={true}
        className="header__bg--bottom"
      >
        <img src={headerImg} alt="header img" />
      </ScrollAnimation>
      <canvas id="stars" width="300" />
      <ScrollAnimation
        animateIn="slideInLeft"
        delay={100}
        animateOnce={true}
        className="canvas-text"
      >
        <p>Nowa jakość w tworzeniu internetowej treści.</p>
        {/* <h2>{headerText}</h2> */}
        <h1>NOWOCZESNE STRONY I SKLEPY INTERNETOWE</h1>
        <ButtonLink text="ZOBACZ NASZE PORTFOLIO" href="/portfolio" class="button button--alert" />
      </ScrollAnimation>
      <Link className="scroll-down" to="/#section__offer">
        <div className="scroll-down__container">
          <img src={arrowsWhite} alt="arrow" />
        </div>
      </Link>
    </div>
  </header>
);

export default Header;
