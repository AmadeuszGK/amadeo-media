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
          <h2>Kilka słów o mnie</h2>
        </div>
        <p className="about-item__about">
          Nazywam się Amadeusz Grzesiak, jestem front-end developerem związanym obecnie z wrocławską
          firmą consultingową Databout. Po skończonych studiach na Politechnice Wrocławskiej w 2017
          roku pierwsze doświadczenie zdobywałem u jednego z liderów branży gamblingowej w Polsce -
          firmie Promatic. Pracowałem wtedy przy platformie do prezentacji gier, stronach
          reklamujących produkt oraz grach online, których twarzami były osoby takie jak Mariusz
          Pudzianowski, czy Zenek Martyniuk. Dziś spełniam się jako front-end developer tworząc
          narzędzie do analiz terenu - Databout Tools.
        </p>
        <div className="desc__variant">
          <h3>Zaufanie</h3>
          <p>
            Bliska relacja, otwarty dialog i przejrzysty cennik to moje credo. Wzajemne zrozumienie
            i wspólne określenie celów to gwarancja sukcesu. Stale poszukuję najlepszych rozwiązań i
            nie boję się nieszablonowych pomysłów. Nie satysfakcjonuje mnie przeciętność, tego
            samego chcę dla moich Klientów.
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
            <Link to="/portfolio">Zobacz projekty jakie wykonłem</Link>
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
