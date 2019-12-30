import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import envelope from '../images/envelope-regular.png'
import phone from '../images/phone-solid.png'
import linkedin from '../images/linkedin-brands.png'
import facebook from '../images/facebook-square-brands.png'
import responsive from '../images/responsive.png'

const Contact = ({ siteTitle }) => (
  <section className="section-contact" id="section-contact">
    <div className="contact-box">
      <ScrollAnimation
        className="contact-details"
        animateIn="slideInUp"
        delay={300}
        animateOnce={true}
      >
        <div className="contact-header">
          <div className="flat-line" />
          <p>KONTAKT</p>
        </div>

        <h2>
          Nawiążmy
          <br />
          współpracę
        </h2>

        <p>
          Możesz nas znaleźć w paru miejscach w sieci, ale jeśli wolisz zrobić
          to "po staremu" po prostu wyślij maila lub zadzwoń.
        </p>

        <div className="contact-social">
          <div className="contact-social-item">
            <a href="mailto:grzesiak.amadeusz@gmail.com">
              <img src={envelope} alt="email" />
              grzesiak.amadeusz@gmail.com
            </a>
          </div>
          <div className="contact-social-item">
            <a href="tel:796536228">
              {" "}
              <img src={phone} alt="phone" />
              +48 796 536 228
            </a>
          </div>
          <div className="contact-social-item">
            <a href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160">
              {" "}
              <img src={linkedin} alt="linked" />
              linkedin
            </a>
          </div>
          <div className="contact-social-item">
            <a href="https://www.facebook.com/grzesiak.amadeusz">
              <img src={facebook} alt="facebook" />
              facebook
            </a>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        className="contact-image"
        animateIn="fadeIn"
        delay={600}
        animateOnce={true}
      >
        <img src={responsive} alt="responsive screens" />
      </ScrollAnimation>

    </div>
  </section>
);

export default Contact;
