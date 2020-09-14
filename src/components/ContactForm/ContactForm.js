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
      action="/success"
      className="contact__form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p>
        Skontaktuj się z <b className="bold">Amadeo Media</b>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <input name="name" type="text" className="form__input form__input--name" placeholder="Imię" />
      <input
        name="telefon"
        type="text"
        className="form__input form__input--mobile"
        placeholder="Telefon"
      />
      <input
        type="email"
        name="email"
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
        {/* <input className="checkbox" type="checkbox" /> */}
        <p className="privacy-policy">
          Administratorem Twoich danych osobowych jest Amadeo Media z siedzibą w Lubaniu. Twoje dane
          osobowe będą przetwarzane w celu obsługi Twojego zapytania w ramach formularza
          kontaktowego, a także w celach statystycznych i analitycznych administratora. Więcej
          informacji na temat przetwarzania danych osobowych znajduje się w mojej
          <Link to="/privacy-policy">polityce prywatności.</Link>
        </p>
      </div>
      <ButtonSend type="submit" class="button--alert button--send" text="WYŚLIJ" />
    </form>
  </ScrollAnimation>
);

export default ContactForm;
