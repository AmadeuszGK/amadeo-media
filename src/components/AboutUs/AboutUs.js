import React from 'react';

import offerItem2 from '../../images/offer-item-2.png';
import Skills from '../Skills/Skills';
import './AboutUs.scss';
import { Link } from 'gatsby';

const AboutUs = () => (
  <>
    <div className="about-item--nobg">
      <div className="top-text about-item__desc about-item__desc--left">
        <div className="SectionTop-module--top__header--295vo">
          <div className="flat-line" />
          <h2>Kilka słów o nas</h2>
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
            Bliska relacja, otwarty dialog i przejrzysty cennik to moje credo. Wzajemne zrozumienie
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
            <Link to="/portfolio">Zobacz projekty jakie wykonaliśmy</Link>
          </div>
        </div>
      </div>
      <div className="top-text about-item__image">
        <img src={offerItem2} alt="amadeo" />
      </div>
    </div>

    <Skills />
  </>
);

export default AboutUs;
