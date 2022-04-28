import React from 'react';
import ContactForm from '../../ContactForm/ContactForm';
import { StaticImage } from 'gatsby-plugin-image';

const ContactHome = () => (
  <section className="contact section" id="kontakt">
    <StaticImage
      src="../../images/triangle.png"
      alt="triangle shape"
      width={95}
      placeholder="blurred"
      layout="constrained"
      className="shape triangle"
    />
    <div className="container">
      <StaticImage
        src="../../../images/square2.png"
        alt="square shape"
        width={70}
        placeholder="blurred"
        layout="constrained"
        className="shape square"
      />
      <div className="contact-info">
        <h3 className="sub-heading">Kontakt</h3>
        <h2 className="heading">Nawiążmy współpracę</h2>
        <p className="text">
          Chciałbyś skorzystać z moich usług? Masz jakieś pytania? Nie czekaj, napisz maila lub zadzwoń! Konsultacje oraz wyceny
          są u mnie zawsze za darmo.
        </p>
        <div className="contact-links">
          <a href="mailto:grzesiak.amadeusz@gmail.com" className="mail">
            E-mail: grzesiak.amadeusz@gmail.com
          </a>
          <a href="tel:+48796536228" className="mail">
            Tel: +48 796 536 228
          </a>
          <a href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160" className="mail">
            Linkedin
          </a>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
);

export default ContactHome;
