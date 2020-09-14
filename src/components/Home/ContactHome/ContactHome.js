import React from 'react';

import envelope from '../../../images/envelope-regular.png';
import phone from '../../../images/phone-solid.png';
// import linkedin from '../../../images/linkedin-brands.png';
// import facebook from '../../../images/facebook-square-brands.png';
import ContactForm from '../../ContactForm/ContactForm';
import './ContactHome.scss';

const ContactHome = () => (
  <section className="section__contact" id="section__contact">
    <div className="contact__wrapper">
      <div className="contact__details">
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
          Chciałbyś skorzystać z moich usług? Masz jakieś pytania? Nie czekaj, napisz maila lub
          zadzwoń! Konsultacje oraz wyceny są u mnie zawsze za darmo.
        </p>

        <div className="contact__social">
          <div className="social__item">
            <a href="mailto:grzesiak.amadeusz@gmail.com">
              <img src={envelope} alt="email" />
              grzesiak.amadeusz@gmail.com
            </a>
          </div>
          <div className="social__item">
            <a href="tel:+48796536228">
              {' '}
              <img src={phone} alt="phone" />
              +48 796 536 228
            </a>
          </div>
          {/* <div className="social__item">
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
          </div> */}
        </div>
      </div>

      <ContactForm />
    </div>
  </section>
);

export default ContactHome;
