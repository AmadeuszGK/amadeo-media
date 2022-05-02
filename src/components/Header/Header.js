import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { withTrans } from '../../i18n/withTrans';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Header = ({ t }) => (
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
        <h1 className="heading">{t(`header.bigTitle`)}</h1>
        <p className="text">{t(`header.text`)}</p>
        <div className="cta">
          <Link className="btn" to="/#portfolio" activeClassName="active">
            {t(`header.portfolio`)}
          </Link>
          <Link to="/#kontakt" className="btn secondary-btn">
            {t(`header.contactMe`)}
          </Link>
        </div>
      </div>
      <div className="showcase-image">
        <StaticImage
          src="../../images/amadeusz-pic-1.png"
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

export default withTrans(Header);
