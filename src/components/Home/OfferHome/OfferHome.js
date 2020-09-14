import React from 'react';
import styles from './OfferHome.module.scss';
import offerItem1 from '../../../images/offer-item-img-1.png';
import offerItem2 from '../../../images/offer-item-img-2.png';
import offerItem3 from '../../../images/offer-item-img-3.png';
import offerItem4 from '../../../images/offer-item-img-4.png';
import offerItem5 from '../../../images/offer-item-img-5.png';
import { Link } from 'gatsby';
import SectionTop from '../../SectionTop/SectionTop';

const topText = (
  <p>
    Moje usugi charakteryzuje nowoczesne podejście do tematu, dokładność oraz przejżystość cenowa.
    Naciśnij na interesującą Cię kategorię lub kliknij <Link to="/offer-and-pricing">tutaj</Link>{' '}
    aby przejść do ofetry i cennika.
  </p>
);
const bigHeader = (
  <h2>
    Nowoczesność <br /> i użytkowość
  </h2>
);
const smallHeader = 'CO ROBIMY?';

const OfferHome = () => (
  <section className={styles.section__offer} id="section__offer">
    <div className={styles.offer__grid}>
      <SectionTop smallHeader={smallHeader} bigHeader={bigHeader} paragraph={topText} />

      <div className={styles.offer__items}>
        <div className={styles.offer__item}>
          <div to="/offer-and-pricing">
            <img src={offerItem1} alt="websites" />
            <h2>Strony WWW</h2>
            <p>
              Moją specjalnością są strony internetowe oraz aplikacje webowe. Wszystko dostosowane
              do urządzeń mobilnych. Przy tworzeniu stron zwracam szczególną uwagę na SEO, czyli
              pozycjonowanie strony w wyszukiwarkach.
            </p>
          </div>
          <Link to="/offer-and-pricing/#website" className={styles.offer__link}>
            Czytaj dalej...
          </Link>
        </div>
        <div className={styles.offer__item}>
          <div to="/offer-and-pricing">
            <img src={offerItem2} alt="ecommerce" />
            <h2>Sklepy internetowe</h2>
            <p>
              Tworzę sklepy internetowe oparte o najpopularniejsze na świecie narzędzie Woocomerce
              (Wordpress). Do dyspozycji klienta zostawiamy bardzo intuicyjny system zarządzania
              sklepem.
            </p>
          </div>
          <Link to="/offer-and-pricing/#store" className={styles.offer__link}>
            Czytaj dalej...
          </Link>
        </div>
        <div className={styles.offer__item}>
          <div to="/offer-and-pricing">
            <img src={offerItem3} alt="graphics" />
            <h2>Grafika</h2>
            <p>
              Oprócz stron internetowych i sklepów (Ecommerce) zajmuję się także grafiką. Tworzę
              katalogi, wizytówki, loga, banery, reklamy i wiele innych. Wszystko dostosowane do
              najnowszych trendów.
            </p>
          </div>
          <Link to="/offer-and-pricing/#graphics" className={styles.offer__link}>
            Czytaj dalej...
          </Link>
        </div>
        <div className={styles.offer__item}>
          <div to="/offer-and-pricing">
            <img src={offerItem5} alt="update" />
            <h2>Naprawa starych stron</h2>
            <p>
              Internet jest pełen zepsutych, zaniedbanych lub przestarzałych stron internetowych.
              Dobieram odpowiednie metody do zaistniałej sytuacji: naprawiam, poprawiam lub
              przebudowuję archaiczne strony.
            </p>
          </div>
          <Link to="/offer-and-pricing/#administration" className={styles.offer__link}>
            Czytaj dalej...
          </Link>
        </div>
        <div className={styles.offer__item}>
          <div to="/offer-and-pricing">
            <img src={offerItem4} alt="adminiastration" />
            <h2>Administrowanie stron</h2>
            <p>
              Moi klienci zawsze mogą na mnie liczyć, pomagam w obsłudze stron i sklepów
              internetowych, wdrażam podsyłane treści lub wprowadzam modyfikacje. Ponadto dbam, aby
              wszystko było zaktualizowane, działało sprawnie oraz tworzę kopie zapasowe.
            </p>
          </div>
          <Link to="/offer-and-pricing/#administration" className={styles.offer__link}>
            Czytaj dalej...
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default OfferHome;
