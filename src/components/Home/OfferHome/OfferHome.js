import React from 'react';
import triangle from '../../../images/triangle.png';
import square1 from '../../../images/square1.png';
import offerItem1 from '../../../images/offer-item-img-1.png';
import offerItem2 from '../../../images/offer-item-img-2.png';
import offerItem3 from '../../../images/offer-item-img-3.png';
import offerItem4 from '../../../images/offer-item-img-4.png';
import offerItem5 from '../../../images/offer-item-img-5.png';
// import { Link } from 'gatsby';

const OfferHome = () => (
  <section className="services section" id="oferta">
    <img src={triangle} className="shape triangle" />
    <div className="container">
      <div className="services-info">
        <h3 className="sub-heading">Nowoczesność i użytkowość</h3>
        <h1 className="heading">Czym się zajumuję?</h1>
        <p className="text">
          Moje usługi charakteryzuje nowoczesne podejście do tematu oraz dokładność. Oferuję pomoc w projektowaniu, testowaniu czy
          administacji. Pomogę przerodzić twoje pomysły w gotowy produkt.
        </p>
        <div className="milestones">
          <div className="ml">
            <h2 className="number">
              <span data-target="11">{new Date().getFullYear() - 2018}</span>+
            </h2>
            <h5>Lat doświadczenia</h5>
          </div>
          <div className="ml">
            <h2 className="number">
              <span data-target="79">{(new Date().getFullYear() - 2018) * 5}</span>+
            </h2>
            <h5>Projekty</h5>
          </div>
          <div className="ml">
            <h2 className="number">
              <span data-target="95">{(new Date().getFullYear() - 2018) * 4}</span>+
            </h2>
            <h5>Klienci</h5>
          </div>
        </div>
      </div>
      <div className="services-grid">
        <div className="srv-card">
          <div className="card-desc">
            <h3>Strony WWW</h3>
            <img src={offerItem1} className="" width={200} />
            <p className="text">
              Moją specjalnością są strony internetowe oraz aplikacje webowe. Wszystko dostosowane do urządzeń mobilnych. Przy
              tworzeniu stron zwracam szczególną uwagę na SEO, czyli pozycjonowanie strony w wyszukiwarkach.
            </p>
          </div>
          <a href="#" className="btn secondary-btn">
            Więcej
          </a>
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h3>Sklepy internetowe</h3>
            <img src={offerItem2} className="" width={200} />
            <p className="text">
              Tworzę sklepy internetowe oparte o najpopularniejsze na świecie narzędzie Woocomerce (Wordpress). Do dyspozycji
              klienta zostawiamy bardzo intuicyjny system zarządzania sklepem.
            </p>
          </div>
          <a href="#" className="btn secondary-btn">
            Więcej
          </a>
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h3>Grafika</h3>
            <img src={offerItem3} className="" width={200} />
            <p className="text">
              Oprócz stron internetowych i sklepów (Ecommerce) zajmuję się także grafiką. Tworzę katalogi, wizytówki, loga,
              banery, reklamy i wiele innych. Wszystko dostosowane do najnowszych trendów.
            </p>
          </div>
          <a href="#" className="btn secondary-btn">
            Więcej
          </a>
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h3>Administrowanie stron</h3>
            <img src={offerItem5} className="" width={200} />
            <p className="text">
              Moi klienci zawsze mogą na mnie liczyć, pomagam w obsłudze stron i sklepów internetowych, wdrażam podsyłane treści
              lub wprowadzam modyfikacje. Ponadto dbam, aby wszystko było zaktualizowane, działało sprawnie oraz tworzę kopie
              zapasowe.
            </p>
          </div>
          <a href="#" className="btn secondary-btn">
            Więcej
          </a>
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h3>Pozycjonowanie SEO</h3>
            <img src={offerItem4} className="" width={200} />
            <p className="text">
              Moi klienci zawsze mogą na mnie liczyć, pomagam w obsłudze stron i sklepów internetowych, wdrażam podsyłane treści
              lub wprowadzam modyfikacje. Ponadto dbam, aby wszystko było zaktualizowane, działało sprawnie oraz tworzę kopie
              zapasowe.
            </p>
          </div>
          <a href="#" className="btn secondary-btn">
            Więcej
          </a>
        </div>
        <img src={square1} alt="square shape" className="shape square" />
      </div>
    </div>
  </section>
);

export default OfferHome;
