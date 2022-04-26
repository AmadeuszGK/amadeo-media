import React from 'react';
import './Header.scss';
import headerImg from '../../images/amadeusz-pic-1.png';
import circle1 from '../../images/circle1.png';
import square1 from '../../images/square1.png';
import dots from '../../images/dots.png';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Header = () => (
  <section class="showcase-area" id="home">
    <img src={square1} class="shape square" alt="shape square" />
    <div class="container">
      <div class="showcase-info">
        <h3 class="sub-heading">Amadeusz Grzesiak</h3>
        <h1 class="heading">Nowoczesne strony i sklepy internetowe</h1>
        <p class="text">I am a freelance web developer. Let's work together.</p>
        <div class="cta">
          <a href="mailto:markusraik@mail.com" class="btn">Contact me</a>
          <a href="./assets/markusCV.pdf" download class="btn secondary-btn">Download CV</a>
        </div>
      </div>
      <div class="showcase-image">
        <img src={headerImg} class="person" alt="laptop"/>
        <img src={circle1} class="shape circle" alt="shape circle"/>
        <img src={dots} class="shape dots" alt="dots"/>
      </div>
    </div>
  </section>
);

export default Header;
