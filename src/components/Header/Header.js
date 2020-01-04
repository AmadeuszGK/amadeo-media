import React from "react";
import { Link } from "gatsby";
import arrowsWhite from "../../images/arrows-white.svg";
import MenuDesktop from '../Menu/MenuDesktop/MenuDesktop';
import './Header.scss';
import ButtonLink from'../Button/ButtonLink';

const Header = () => (
    <header style={{ height: 100 + "vh" }}>
      
      <MenuDesktop />

      <div className="canvas__container">
        <div className="header__bg--bottom" />
        <canvas id="stars" width="300" />
        <div className="canvas-text">
          <p>
            Nowa jakość w tworzeniu internetowej treści.
          </p>
          {/* <h2>{headerText}</h2> */}
          <h1>
            NOWOCZESNE STRONY I SKLEPY INTERNETOWE
          </h1>
            <ButtonLink text="ZOBACZ NASZE PORTFOLIO" href="/portfolio" class="button button--alert"/>
        </div>
        <Link className="scroll-down" to="/#section__about">
          <div className="scroll-down__container">
            <img src={arrowsWhite} alt="arrow" />
          </div>
        </Link>
      </div>
    </header>
  )

export default Header;
