import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
// import { Link } from 'gatsby';

const OfferHome = () => (
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
        <h3 className="sub-heading">Nowoczesność i użytkowość</h3>
        <h2 className="heading">Czym się zajumuję?</h2>
        <p className="text">
          Moje usługi charakteryzuje nowoczesne podejście do tematu oraz dokładność. Oferuję pomoc w projektowaniu, testowaniu czy
          administacji. Pomogę przerodzić twoje pomysły w gotowy produkt.
        </p>
        <div className="milestones">
          <div className="ml">
            <div className="number">
              <span data-target="11">{new Date().getFullYear() - 2018}</span>+
            </div>
            <span className="title">Lat na rynku</span>
          </div>
          <div className="ml">
            <div className="number">
              <span data-target="79">{(new Date().getFullYear() - 2018) * 5}</span>+
            </div>
            <span className="title">Projekty</span>
          </div>
          <div className="ml">
            <div className="number">
              <span data-target="95">{(new Date().getFullYear() - 2018) * 4}</span>+
            </div>
            <span className="title">Klienci</span>
          </div>
        </div>
      </div>
      <div className="services-grid">
        <div className="srv-card">
          <div className="card-desc">
            <h2>Strony WWW</h2>
            <StaticImage
              src="../../../images/offer-item-img-1.png"
              width={150}
              layout="fixed"
              placeholder="blurred"
              alt="websites"
            />
            <p className="text">
              Moją specjalnością są strony internetowe oraz aplikacje webowe. Wszystko dostosowane do urządzeń mobilnych. Przy
              tworzeniu stron zwracam szczególną uwagę na SEO, czyli pozycjonowanie strony w wyszukiwarkach.
            </p>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a> */}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>Sklepy internetowe</h2>
            <StaticImage
              src="../../../images/offer-item-img-2.png"
              width={150}
              layout="fixed"
              placeholder="blurred"
              alt="e-commerce"
            />
            <p className="text">
              Tworzę sklepy internetowe oparte o najpopularniejsze na świecie narzędzie Woocomerce (Wordpress). Do dyspozycji
              klienta zostawiamy bardzo intuicyjny system zarządzania sklepem.
            </p>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a> */}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>Grafika</h2>
            <StaticImage
              src="../../../images/offer-item-img-3.png"
              width={150}
              layout="fixed"
              placeholder="blurred"
              alt="graphic design"
            />
            <p className="text">
              Oprócz stron internetowych i sklepów (Ecommerce) zajmuję się także grafiką. Tworzę katalogi, wizytówki, loga,
              banery, reklamy i wiele innych. Wszystko dostosowane do najnowszych trendów.
            </p>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a> */}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>Administrowanie stron</h2>
            <StaticImage
              src="../../../images/offer-item-img-5.png"
              width={150}
              layout="fixed"
              placeholder="blurred"
              alt="website administration"
            />
            <p className="text">
              Moi klienci zawsze mogą na mnie liczyć, pomagam w obsłudze stron i sklepów internetowych, wdrażam podsyłane treści
              lub wprowadzam modyfikacje. Ponadto dbam, aby wszystko było zaktualizowane, działało sprawnie oraz tworzę kopie
              zapasowe.
            </p>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a> */}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>Pozycjonowanie SEO</h2>
            <StaticImage src="../../../images/offer-item-img-4.png" width={150} layout="fixed" placeholder="blurred" alt="seo" />
            <p className="text">
              Moi klienci zawsze mogą na mnie liczyć, pomagam w obsłudze stron i sklepów internetowych, wdrażam podsyłane treści
              lub wprowadzam modyfikacje. Ponadto dbam, aby wszystko było zaktualizowane, działało sprawnie oraz tworzę kopie
              zapasowe.
            </p>
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

export default OfferHome;
