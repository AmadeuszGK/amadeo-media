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
      method="POST"
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
        {/* <input className="checkbox" type="checkbox" /> */}
        <p className="privacy-policy">
          Amadeo Media potrzebuje danych kontaktowych, które nam przekazujesz, aby skontaktować się
          z Tobą w sprawie naszych produktów i usług. Możesz zrezygnować z otrzymywania tych
          wiadomości w dowolnym momencie. Aby uzyskać informacje na temat rezygnacji z subskrypcji,
          a także nasze praktyki dotyczące prywatności i zobowiązanie do ochrony prywatności,
          zapoznaj się z naszą
          <Link to="/privacy-policy">Polityką prywatności.</Link>
        </p>
      </div>
      <ButtonSend type="submit" class="button--alert button--send" text="WYŚLIJ" />
    </form>
  </ScrollAnimation>
);

export default ContactForm;
