import React from 'react';
import { Link } from 'gatsby';
import Skills from '../Skills/Skills';
import { StaticImage } from 'gatsby-plugin-image';
import { withTrans } from '../../i18n/withTrans';

const AboutUs = ({ t }) => (
  <>
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
          <h3 className="sub-heading">Front-end Developer</h3>
          <h1 className="heading">Amadeusz Grzesiak</h1>
          <p className="text">{t(`aboutMe.text1`)}</p>
          <div className="cta">
            <Link className="btn" to="/#oferta" activeClassName="active">
              {t(`aboutMe.button1`)}
            </Link>
            <Link to="/#kontakt" className="btn secondary-btn">
              {t(`aboutMe.button2`)}
            </Link>
          </div>
        </div>
        <div className="showcase-imagee">
          <StaticImage
            src="../../images/circle1.png"
            alt="circle shape"
            width={190}
            placeholder="blurred"
            layout="constrained"
            className="shape circle"
          />
          <StaticImage
            src="../../images/amadeusz-grzesiak.jpg"
            alt="circle shape"
            width={550}
            placeholder="blurred"
            layout="constrained"
            imgStyle={{ borderBottomLeftRadius: '80px', borderBottomRightRadius: '80px' }}
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
    <section className="section about-page" id="o-mnie">
      <StaticImage
        src="../../images/triangle.png"
        alt="triangle shape"
        width={95}
        placeholder="blurred"
        layout="constrained"
        className="shape triangle"
      />
      <div className="container">
        <div className="about-me">
          <h3 className="sub-heading">{t(`aboutMe.smallTitle2`)}</h3>
          <h2 className="heading">{t(`aboutMe.bigTitle2`)}</h2>
          <p className="text">{t(`aboutMe.text2`)}</p>
          <p className="text">{t(`aboutMe.text3`)}</p>
        </div>
      </div>
    </section>
    <section className="skills section">
      <div className="container">
        <div className="skills-box">
          <div className="box-heading">
            <h3 className="sub-heading">{t(`aboutMe.smallTitle3`)}</h3>
            <h2 className="heading">{t(`aboutMe.bigTitle3`)}</h2>
            <div className="box-desc">
              <p className="text">{t(`aboutMe.text4`)}</p>
            </div>
          </div>
          <div className="skills-wrap"></div>
          <Skills />
          <StaticImage
            src="../../images/dots.png"
            alt="dots shape"
            width={112}
            placeholder="blurred"
            layout="constrained"
            className="shape dots"
          />
          <StaticImage
            src="../../images/square1.png"
            alt="square shape"
            width={70}
            placeholder="blurred"
            layout="constrained"
            className="shape square"
          />
        </div>
      </div>
    </section>
  </>
);

export default withTrans(AboutUs);
