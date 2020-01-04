import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styles from'./OfferHome.module.scss'
import offerItem1 from "../../../images/offer-item-img-1.png"
import offerItem2 from "../../../images/offer-item-img-2.png"
import offerItem3 from "../../../images/offer-item-img-3.png"
import offerItem4 from "../../../images/offer-item-img-4.png"
import offerItem5 from "../../../images/offer-item-img-5.png"

import ButtonLink from '../../Button/ButtonLink'


const OfferHome = () => (
  <section className={styles.section__offer} id="section__offer">
    <div className={styles.offer__grid}>
      <ScrollAnimation
        className={styles.offer__about}
        animateIn="slideInLeft"
        delay={100}
        animateOnce={true}
      >
        <div className={styles.offer__header}>
          <div className="flat-line" />
          <p>CO ROBIMY?</p>
        </div>

        <h2>
          Nowoczesność
          <br />i użytkowość
        </h2>
        <p>
          Nasze usugi charakteryzuje nowoczesne podejście do tematu, dokładność oraz przejżystość cenowa.
        </p>
        <ButtonLink href="/offer" text="OFERTA I CENNIK" class="button button--alert"/>
      </ScrollAnimation>

      <div className={styles.offer__items}>
        <ScrollAnimation
          className={styles.offer__item}
          animateIn="slideInUp"
          delay={300}
          animateOnce={true}
        >
          <img src={offerItem1} alt="websites" />
          <h3>Strony WWW</h3>
          <p>
            Tworzymy strony firmowe. Wszystko dostosowane
            do urządzeń mobilnych. Tworzymy strony statyczne oraz dynamiczne z
            wykorzystaniem najnowszych technologii.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          className={styles.offer__item}
          animateIn="slideInUp"
          delay={700}
          animateOnce={true}
        >
          <img src={offerItem2} alt="ecommerce" />
          <h3>Sklepy internetowe</h3>
          <p>
            Tworzymy sklepy internetowe opartę o najpopularniejszy obecnie Woocomerce. Do dyspozycji klienta zostawiamy bardzo intuicyjny system zarządzania sklepem. 
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          className={styles.offer__item}
          animateIn="slideInUp"
          delay={1100}
          animateOnce={true}
        >
          <img src={offerItem5} alt="graphics" />
          <h3>Grafika</h3>
          <p>
            Oprócz stron i sklepów zajmujemy się takze grafiką. Tworzymy katalogi, wizytówki, loga, banery, reklamy i wiele innych.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          className={styles.offer__item}
          animateIn="slideInUp"
          delay={1500}
          animateOnce={true}
        >
          <img src={offerItem3} alt="update" />
          <h3>Naprawa starych stron</h3>
          <p>
            Internet jest pełen zepsutych, zaniedbanych lub przestarzałych stron
            internetowych. Dobieramy odpowiednie metody do zaistniałej sytuacji:
            naprawiamy, poprawiamy lub oferujemy nową, wysoką jakość.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          className={styles.offer__item}
          animateIn="slideInUp"
          delay={1900}
          animateOnce={true}
        >
          <img src={offerItem4} alt="adminiastration" />
          <h3>Administrowanie stron</h3>
          <p>
            Nasi klienci zawsze mogą na nas liczyć, pomagamy w obsłudze stron i
            sklepów internetowych, wdrażam podsyłane treści lub wprowadzam
            modyfikacje. Ponadto dbamy, aby wszystko było zaktualizowane,
            działało sprawnie oraz tworzymy kopie zapasowe.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  </section>
);


export default OfferHome;
