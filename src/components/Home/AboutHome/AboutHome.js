import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { withTrans } from '../../../i18n/withTrans';

const AboutHome = ({ t }) => (
  <section className="about section" id="o-mnie">
    <StaticImage
      src="../../../images/triangle.png"
      alt="triangle shape"
      width={95}
      placeholder="blurred"
      layout="constrained"
      className="shape triangle"
    />
    <div className="container">
      <div className="about-grid">
        <div className="about-card">
          <StaticImage
            src="../../../images/icon-about1.jpg"
            alt="Pricing"
            width={60}
            placeholder="blurred"
            layout="constrained"
            className="icon"
          />
          <span>{t(`aboutHome.imageTitle1`)}</span>
        </div>
        <div className="about-card">
          <StaticImage
            src="../../../images/icon-about2.jpg"
            alt="Graphic design"
            width={60}
            placeholder="blurred"
            layout="constrained"
            className="icon"
          />
          <span>{t(`aboutHome.imageTitle2`)}</span>
        </div>
        <div className="about-card">
          <StaticImage
            src="../../../images/icon-about4.jpg"
            alt="Testing"
            width={60}
            placeholder="blurred"
            layout="constrained"
            className="icon"
          />
          <span>{t(`aboutHome.imageTitle4`)}</span>
        </div>
        <div className="about-card">
          <StaticImage
            src="../../../images/icon-about3.jpg"
            alt="Programming"
            width={60}
            placeholder="blurred"
            layout="constrained"
            className="icon"
          />
          <span>{t(`aboutHome.imageTitle3`)}</span>
        </div>
      </div>
      <div className="about-info">
        <h3 className="sub-heading">{t(`aboutHome.smallTitle`)}</h3>
        <h2 className="heading">{t(`aboutHome.bigTitle`)}</h2>
        <p className="text">{t(`aboutHome.text`)}</p>
        <div className="cta">
          <Link to="/o-mnie" className="btn">
            {t(`aboutHome.more`)}
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default withTrans(AboutHome);
