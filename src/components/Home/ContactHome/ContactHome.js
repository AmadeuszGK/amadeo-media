import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import envelope from '../../../images/envelope-regular.png';
import phone from '../../../images/phone-solid.png';
import linkedin from '../../../images/linkedin-brands.png';
import facebook from '../../../images/facebook-square-brands.png';
import ContactForm from '../../ContactForm/ContactForm';
import './ContactHome.scss';

const ContactHome = () => (
  <section className="section__contact" id="section__contact">
    <div className="contact__wrapper">
      <ScrollAnimation
        className="contact__details"
        animateIn="slideInLeft"
        delay={100}
        animateOnce={true}
      >
        <div className="contact__header">
          <div className="flat-line" />
          <p>KONTAKT</p>
        </div>

        <h2>
          Nawiążmy
          <br />
          współpracę
        </h2>

        <p>
          Możesz nas znaleźć w paru miejscach w sieci, ale jeśli wolisz zrobić to "po staremu" po
          prostu wyślij maila lub zadzwoń.
        </p>

        <div className="contact__social">
          <div className="social__item">
            <a href="mailto:grzesiak.amadeusz@gmail.com">
              <img src={envelope} alt="email" />
              amadeomedia@gmail.com
            </a>
          </div>
          <div className="social__item">
            <a href="tel:+48796536228">
              {' '}
              <img src={phone} alt="phone" />
              +48 796 536 228
            </a>
          </div>
          <div className="social__item">
            <a href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160">
              {' '}
              <img src={linkedin} alt="linked" />
              linkedin
            </a>
          </div>
          <div className="social__item">
            <a href="https://www.facebook.com/grzesiak.amadeusz">
              <img src={facebook} alt="facebook" />
              facebook
            </a>
          </div>
        </div>
      </ScrollAnimation>

      <ContactForm />
    </div>
  </section>
);

export default ContactHome;
