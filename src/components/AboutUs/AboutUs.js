import React from 'react';
import './AboutUs.scss';
import { Link } from 'gatsby';
import circle1 from '../../images/circle1.png';
import square1 from '../../images/square1.png';
import dots from '../../images/dots.png';
import Skills from '../Skills/Skills';

const AboutUs = () => (
  <>
    {/* <div className="about-item--nobg">
      <div className="top-text about-item__desc about-item__desc--left">
        <div className="top__header">
          <div className="flat-line" />
          <h2>Kilka słów o mnie</h2>
        </div>
        <h2 className="about-big-title">O mnie</h2>
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
    </div> */}
    <section className="showcase-area" id="home">
      <img src={square1} className="shape square" alt="shape square" />
      <div className="container">
        <div className="showcase-info">
          <h3 className="sub-heading">Front-end Developer</h3>
          <h1 className="heading">Amadeusz Grzesiak</h1>
          <p className="text">Nowa jakość w tworzeniu internetowej treści. Zróbmy coś razem!</p>
          <div className="cta">
            <Link className="btn" to="/#oferta" activeClassName="active">
              Oferta
            </Link>
            <Link href="/#kontakt" className="btn secondary-btn">
              Skontaktuj się ze mną
            </Link>
          </div>
        </div>
        <div className="showcase-imagee">
          <img src={circle1} className="shape circle" alt="shape circle" />
          <img src={dots} className="shape dots" alt="dots" />
        </div>
      </div>
    </section>
    <section className="section" id="o-mnie">
      <img src="./assets/triangle.png" className="shape triangle" alt="" />
      <div className="container">
        <div className="about-me">
          <h3 className="sub-heading">Doświadczenie</h3>
          <h1 className="heading">Moja historia</h1>
          <p className="text">
            Nazywam się Amadeusz Grzesiak, jestem front-end developerem związanym obecnie z wrocławską firmą consultingową
            Databout. Po skończonych studiach na Politechnice Wrocławskiej w 2017 roku pierwsze doświadczenie zdobywałem u jednego
            z liderów branży gamblingowej w Polsce - firmie Promatic. Pracowałem wtedy przy platformie do prezentacji gier,
            stronach reklamujących produkt oraz grach online, których twarzami były osoby takie jak Mariusz Pudzianowski, czy
            Zenek Martyniuk. Dziś spełniam się jako front-end developer tworząc narzędzie do analiz terenu - Databout Tools.
          </p>
          <p className="text">
            Nazywam się Amadeusz Grzesiak, jestem front-end developerem związanym obecnie z wrocławską firmą consultingową
            Databout. Po skończonych studiach na Politechnice Wrocławskiej w 2017 roku pierwsze doświadczenie zdobywałem u jednego
            z liderów branży gamblingowej w Polsce - firmie Promatic. Pracowałem wtedy przy platformie do prezentacji gier,
            stronach reklamujących produkt oraz grach online, których twarzami były osoby takie jak Mariusz Pudzianowski, czy
            Zenek Martyniuk. Dziś spełniam się jako front-end developer tworząc narzędzie do analiz terenu - Databout Tools.
          </p>
        </div>
      </div>
    </section>
    <section class="skills section">
      <div class="container">
        <div class="skills-box">
          <div class="box-heading">
            <h3 class="sub-heading">Umiejętności</h3>
            <h2 class="heading">Najnowsze technologie</h2>
            <div class="box-desc">
              <p class="text">
                Moje projekty tworzone są w oparciu o najnowsze technologie webowe. Stale rozwijam wachlarz umiejętności poprzez
                nowe wyzwania oraz kursy.
              </p>
            </div>
          </div>
          <div class="skills-wrap"></div>
          <Skills />
          <img src={dots} class="shape dots" />
          <img src={square1} class="shape square" />
        </div>
      </div>
    </section>
  </>
);

export default AboutUs;
