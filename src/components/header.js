import React from "react";
import { Link } from "gatsby";
import arrowsWhite from "../images/arrows-white.svg"
import MenuDesktop from "./MenuDesktop";

function Header() {
  return (
    <header style={{ height: 100 + "vh" }}>
      
      <MenuDesktop />

      <div className="canvas-container">
        <div className="header-bg-bottom" />
        <canvas id="stars" width="300" />
        <div className="canvas-text">
          <p>
            Nowa jakość w tworzeniu internetowej treści.
          </p>
          {/* <h2>{headerText}</h2> */}
          <h1>
            NOWOCZESNE STRONY I SKLEPY INTERNETOWE
          </h1>
        <a href="/portfolio" className="button-alert" rel="noopener noreferrer">ZOBACZ NASZE PORTFOLIO</a>
        </div>
        <Link className="scroll-down" to="/#section-about-me">
          <div className="scroll-img-container">
            <img src={arrowsWhite} alt="arrow" />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
