import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Header = ({ data }) => (
  <section className="showcase-area" id="home">
    <StaticImage
      src="../../images/square1.png"
      alt="square shape"
      width={70}
      placeholder="blurred"
      layout="constrained"
      className="shape square"
    />
    <div className="container">
      <div className="showcase-info">
        <h3 className="sub-heading">Amadeusz Grzesiak</h3>
        <h1 className="heading">Nowoczesne strony i sklepy internetowe</h1>
        <p className="text">Nowa jakość w tworzeniu internetowej treści. Zróbmy coś razem!</p>
        <div className="cta">
          <Link className="btn" to="/#portfolio" activeClassName="active">
            Portfolio
          </Link>
          <Link to="/#kontakt" className="btn secondary-btn">
            Skontaktuj się ze mną
          </Link>
        </div>
      </div>
      <div className="showcase-image">
        <StaticImage
          src="../../images/amadeusz-pic-1.png"
          width={522}
          alt="laptop"
          placeholder="blurred"
          layout="fullWidth"
          className="person"
        />
        <StaticImage
          src="../../images/circle1.png"
          alt="circle shape"
          width={190}
          placeholder="blurred"
          layout="constrained"
          className="shape circle"
        />
        <StaticImage
          src="../../images/dots.png"
          alt="dots shape"
          width={112}
          placeholder="blurred"
          layout="constrained"
          className="shape dots"
        />
      </div>
    </div>
  </section>
);

export default Header;
