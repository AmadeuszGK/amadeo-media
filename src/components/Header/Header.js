import React from 'react';
import headerImg from '../../images/amadeusz-pic-1.png';
import circle1 from '../../images/circle1.png';
import square1 from '../../images/square1.png';
import dots from '../../images/dots.png';
import { Link } from 'gatsby';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Header = ({ data }) => (
  <section className="showcase-area" id="home">
    <img src={square1} className="shape square" alt="shape square" />
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
        <img src={headerImg} className="person" alt="laptop" />
        <img src={circle1} className="shape circle" alt="shape circle" />
        <img src={dots} className="shape dots" alt="dots" />
      </div>
    </div>
  </section>
);

export default Header;
