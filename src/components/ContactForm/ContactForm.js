import React from 'react';
import './ContactForm.scss';
import ButtonSend from '../Button/Button';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';

const ContactForm = () => (
  <ScrollAnimation
    className="contact__formWrapper"
    animateIn="slideInRight"
    delay={100}
    animateOnce={true}
  >
    <form
      className="contact__form"
      method="post"
      name="contact-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p>
        Skontaktuj się z <b className="bold">Amadeo Media</b>
      </p>
      <input name="name" type="text" className="form__input form__input--name" placeholder="Imię" />
      <input name="telefon" className="form__input form__input--mobile" placeholder="Telefon" />
      <input
        name="email"
        type="email"
        className="form__input form__input--email"
        placeholder="E-mail"
      />
      <textarea
        className="form__input form__input--message"
        placeholder="Wiadomość..."
        type="text"
        name="message"
      />
      <div className="checbox--wrapper">
        <input className="checkbox" type="checkbox" />
        <p className="privacy-policy">
          Akceptuję <Link to="/portfolio">politykę prywatności</Link> itd
        </p>
      </div>
      <ButtonSend type="submit" class="button--alert button--send" text="WYŚLIJ" />
    </form>
  </ScrollAnimation>
);

export default ContactForm;
