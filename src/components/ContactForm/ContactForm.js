import React from 'react';
import './ContactForm.scss';
import ButtonSend from '../Button/Button';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';

const ContactForm = () => (
  <ScrollAnimation
    className="contact__formWrapper"
    animateIn="slideInRight"
    delay={600}
    animateOnce={true}
  >
    <div className="contact__form">
      <p>
        Skontaktuj się z <b className="bold">Amadeo Media</b>
      </p>
      <input className="form__input form__input--name" placeholder="Imię" />
      <input className="form__input form__input--mobile" placeholder="Telefon" />
      <input className="form__input form__input--email" placeholder="E-mail" />
      <textarea
        className="form__input form__input--message"
        placeholder="Wiadomość..."
        type="text"
      />
      <div className="checbox--wrapper">
        <input className="checkbox" type="checkbox" />
        <p className="privacy-policy">
          Akceptuję <Link to="/portfolio">politykę prywatności</Link> itd
        </p>
      </div>
      <ButtonSend class="button--alert button--send" text="WYŚLIJ" />
    </div>
  </ScrollAnimation>
);

export default ContactForm;
