import React from 'react';
import './AboutHome.scss';

class AboutHome extends React.Component {
  render() {
    return (
      <section className="section__about" id="section__about">
        <div className="about">
          <div className="about__text">
            <div className="about__header">
              <div className="flat-line" />
              <p className="flat-line__text">O MNIE</p>
            </div>

            <h1>Amadeo Media</h1>

            <p>
              Cześć, jestem młodym,
              <br />
              kreatywnym programistą,
              <br />
              Stwórzmy coś razem!
            </p>

            <a href="/oferta" rel="noopener noreferrer">
              OFERTA
            </a>

            <div className="typing-box">
              <p>Dumny ze współpracy z&nbsp;&nbsp;</p>
              <div className="word" />
            </div>
          </div>

          <div className="about__images">
            <div className="about__image" />
            <div className="about__box" />
          </div>
        </div>
      </section>
    );
  }
}

export default AboutHome;
