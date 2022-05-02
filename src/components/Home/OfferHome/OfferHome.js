import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { withTrans } from '../../../i18n/withTrans';
// import { Link } from 'gatsby';

const OfferHome = ({ t }) => (
  <section className="services section" id="oferta">
    <StaticImage
      src="../../../images/triangle.png"
      alt="triangle shape"
      width={95}
      placeholder="blurred"
      layout="constrained"
      className="shape triangle"
    />
    <div className="container">
      <div className="services-info">
        <h3 className="sub-heading">{t(`offer.smallTitle`)}</h3>
        <h2 className="heading">{t(`offer.bigTitle`)}</h2>
        <p className="text">{t(`offer.text`)}</p>
        <div className="milestones">
          <div className="ml">
            <div className="number">
              <span data-target="11">{new Date().getFullYear() - 2018}</span>+
            </div>
            <span className="title">{t(`offer.experience`)}</span>
          </div>
          <div className="ml">
            <div className="number">
              <span data-target="79">{(new Date().getFullYear() - 2018) * 5}</span>+
            </div>
            <span className="title">{t(`offer.projects`)}</span>
          </div>
          <div className="ml">
            <div className="number">
              <span data-target="95">{(new Date().getFullYear() - 2018) * 4}</span>+
            </div>
            <span className="title">{t(`offer.clients`)}</span>
          </div>
        </div>
      </div>
      <div className="services-grid">
        <div className="srv-card">
          <div className="card-desc">
            <h2>{t(`offer.websitesTitle`)}</h2>
            <StaticImage
              src="../../../images/offer-item-img-1.png"
              width={150}
              layout="fixed"
              placeholder="blurred"
              alt="websites"
            />
            <p className="text">{t(`offer.websitesText`)}</p>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a> */}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>{t(`offer.storesTitle`)}</h2>
            <StaticImage
              src="../../../images/offer-item-img-2.png"
              width={150}
              layout="fixed"
              placeholder="blurred"
              alt="e-commerce"
            />
            <p className="text">{t(`offer.storesText`)}</p>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a> */}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>{t(`offer.graphicTitle`)}</h2>
            <StaticImage
              src="../../../images/offer-item-img-3.png"
              width={150}
              layout="fixed"
              placeholder="blurred"
              alt="graphic design"
            />
            <p className="text">{t(`offer.graphicText`)}</p>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a> */}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>{t(`offer.administrationTitle`)}</h2>
            <StaticImage
              src="../../../images/offer-item-img-5.png"
              width={150}
              layout="fixed"
              placeholder="blurred"
              alt="website administration"
            />
            <p className="text">{t(`offer.administrationText`)}</p>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a> */}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>{t(`offer.seoTitle`)}</h2>
            <StaticImage src="../../../images/offer-item-img-4.png" width={150} layout="fixed" placeholder="blurred" alt="seo" />
            <p className="text">{t(`offer.seoText`)}</p>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a>*/}
        </div>
        <StaticImage
          src="../../../images/square1.png"
          alt="square shape"
          width={70}
          placeholder="blurred"
          layout="constrained"
          className="shape square"
        />
      </div>
    </div>
  </section>
);

export default withTrans(OfferHome);
