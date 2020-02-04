import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import offerItem1 from '../../images/offer-item-1.png';
import offerItem2 from '../../images/offer-item-2.png';
import offerItemImg1 from '../../images/offer-item-img-1.png';
import offerItemImg2 from '../../images/offer-item-img-2.png';
import Skills from '../Skills/Skills';
import './AboutUs.scss';

const AboutUs = () => (
  <>
    <div className="offer-item--nobg">
      <ScrollAnimation
        className="top-text"
        animateIn="slideInLeft"
        delay={0}
        animateOnce={true}
        className="offer-item__desc offer-item__desc--left"
      >
        <div className="desc__header">
          <img src={offerItemImg2} className="desc-header__image" />
          <h2>Kilka słów o nas</h2>
        </div>
        <p className="offer-item__about">
          Jesteśmy agencją multimedialną zrzeszającą utalentowane osoby z różnych dziedzin takich
          jak programowanie, projektowanie czy grafika. Działamy na rynku od 2019-stego roku. Mimo
          któtkiego istnienia posiadamy wieloletnie doświadczenie w branży wyniesione z poprzednich
          stanowisk. Współpracowaliśmy z dziesiątkami firm z różnych z Polski i nietylko.
          Współpracując z nami szybko i skutecznie dostaniesz produkt, który na długo zapadnie w
          pamięci twoim klientom.
        </p>
        <div className="desc__variant">
          <h3>Zaufanie</h3>
          <p>
            Bliska relacja, otwarty dialog i przejżysty cennik to nasze credo. Wzajemne zrozumienie
            i wspólne określenie celów to gwarancja sukcesu. Stale poszukujemy najlepszych
            rozwiązań. Nie boimy się nieszablonowych pomysłów i nowatorskich rozwiązań. Nie
            satysfakcjonuje nas przeciętność, tego samego chcemy dla naszych Klientów.
          </p>
        </div>
        <div className="offer-item__portfolio-container desktop-only">
          <div className="offer-item__portfolio">
            <div className="what__specification__btn__icon p-event-none">
              <span className="p-event-none" />
              <span className="p-event-none" />
              <span className="p-event-none" />
              <span className="p-event-none" />
            </div>
            <a href="/portfolio">Zobacz projekty jakie wykonaliśmy</a>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        className="top-text"
        animateIn="slideInRight"
        delay={0}
        animateOnce={true}
        className="offer-item__image"
      >
        <img src={offerItem2} />
        <div className="offer-item__portfolio-container mobile-only">
          <div className="offer-item__portfolio">
            <div className="what__specification__btn__icon p-event-none">
              <span className="p-event-none" />
              <span className="p-event-none" />
              <span className="p-event-none" />
              <span className="p-event-none" />
            </div>
            <a href="/portfolio">Zobacz przykłady sklepów jakie wykonaliśmy</a>
          </div>
        </div>
      </ScrollAnimation>
    </div>
    <div className="offer-item--bg">
      <ScrollAnimation
        className="top-text"
        animateIn="slideInLeft"
        delay={400}
        animateOnce={true}
        className="offer-item__image"
      >
        <img src={offerItem1} />
        <div className="offer-item__portfolio-container mobile-only">
          <div className="offer-item__portfolio">
            <div className="what__specification__btn__icon p-event-none">
              <span className="p-event-none" />
              <span className="p-event-none" />
              <span className="p-event-none" />
              <span className="p-event-none" />
            </div>
            <a href="/portfolio">Zobacz przykłady stron jakie wykonaliśmy</a>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        className="top-text"
        animateIn="slideInRight"
        delay={1000}
        animateOnce={true}
        className="offer-item__image"
        className="offer-item__desc"
      >
        {/* <div className="offer-item__number">
            <img src={number01} />
          </div> */}
        <div className="desc__header">
          <img src={offerItemImg1} className="desc-header__image" />
          <h2>Strony internetowe</h2>
        </div>
        <p className="offer-item__about">
          Każda strona jest inna, dlatego nie posiadamy sztywnego cennika i każdą stronę wyceniamy
          indywidualnie. Na końcową cenę składają się m.in. ilość podstron i treści, wykorzysywane
          technologie, ilość języków na stronie czy skomplikowanie graficzne.
        </p>
        <div className="desc__variant">
          <h3>Od 800zł netto</h3>
          <p>
            Strony typu One Page. Są to strony internetowe składające się z „jednej strony” głównej,
            często wydłużonej, po której można poruszać się przesuwając scrollem, używając
            specjalnej nawigacji na stronie lub głównego menu strony. Menu strony nie przenosi do
            podstron, których na takiej stronie nie ma, a do odpowiedniego miejsca na stronie.{' '}
          </p>
        </div>
        <div className="desc__variant">
          <h3>Od 1700zł netto</h3>
          <p>
            Rozbudowana strona z wieloma podstronami i systemem zarządzania CMS, dzięki któremu
            będziesz mógł aktualizować treści samodzielnie. Najlepszy wybór dla małych i średnich
            firm.<a href="/">Przykład.</a>
          </p>
        </div>
        <div className="offer-item__portfolio-container desktop-only">
          <div className="offer-item__portfolio">
            <div className="what__specification__btn__icon p-event-none">
              <span className="p-event-none" />
              <span className="p-event-none" />
              <span className="p-event-none" />
              <span className="p-event-none" />
            </div>
            <a href="/portfolio">Zobacz przykłady stron jakie wykonaliśmy</a>
          </div>
        </div>
      </ScrollAnimation>
    </div>
    <Skills />
  </>
);

export default AboutUs;
