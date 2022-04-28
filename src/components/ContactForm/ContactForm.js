import React from 'react';
import { Link } from 'gatsby';

const ContactForm = () => (
  <form
    action="/success"
    className="contact-form"
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <h3>
      Skontaktuj się z <b className="bold">Amadeo Media</b>
    </h3>
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
      <label>
        Don’t fill this out: <input name="bot-field" />
      </label>
    </p>
    <input name="name" type="text" className="form-input" placeholder="Imię" />
    <input name="telefon" type="text" className="form-input" placeholder="Telefon" />
    <input type="email" name="email" className="form-input" placeholder="E-mail" />
    <textarea className="form-input" placeholder="Wiadomość..." type="text" name="message" />
    <div className="checbox--wrapper">
      <p className="privacy-policy">
        Administratorem Twoich danych osobowych jest Amadeo Media z siedzibą w Lubaniu. Twoje dane osobowe będą przetwarzane w
        celu obsługi Twojego zapytania w ramach formularza kontaktowego, a także w celach statystycznych i analitycznych
        administratora. Wysyłając maila akceptujesz<Link to="/privacy-policy"> politykę prywatności.</Link>
      </p>
    </div>
    <input type="submit" value="Wyślij" className="btn send-btn"></input>
  </form>
);

export default ContactForm;
