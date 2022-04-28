import React from 'react';
import ContactForm from '../../ContactForm/ContactForm';
import square2 from '../../../images/square2.png';
import triangle from '../../../images/triangle.png';

const ContactHome = () => (
  <section className="contact section" id="kontakt">
    <img src={triangle} className="shape triangle" alt="triangle shape" />
    <div className="container">
      <img src={square2} className="shape square" alt="square shape" />
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
