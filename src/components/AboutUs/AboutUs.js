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
    <div className="about-item--nobg">
      <ScrollAnimation
        className="top-text"
        animateIn="slideInLeft"
        delay={0}
        animateOnce={true}
        className="about-item__desc about-item__desc--left"
      >
        <div className="SectionTop-module--top__header--295vo">
          <div className="flat-line" />
          <p>Kilka słów o nas</p>
        </div>
        <p className="about-item__about">
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
        <div className="about-item__portfolio-container">
          <div className="about-item__portfolio">
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
        animateOnce={true}
        className="about-item__image"
      >
        <img src={offerItem2} />
      </ScrollAnimation>
    </div>

    <Skills />
  </>
);

export default AboutUs;
