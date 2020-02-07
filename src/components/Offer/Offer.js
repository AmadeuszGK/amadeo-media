import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import offerItemImg1 from '../../images/offer-item-img-1.png';
import offerItemImg2 from '../../images/offer-item-img-2.png';
import offerItemImg3 from '../../images/offer-item-img-3.png';
import offerItemImg4 from '../../images/offer-item-img-4.png';
import number01grey from '../../images/number-01-grey.png';
import number03grey from '../../images/number-03-grey.png';
import number05grey from '../../images/number-05-grey.png';
import number02white from '../../images/number-02-white.png';
import number04white from '../../images/number-04-white.png';
import sass from '../../images/sass.png';

import './Offer.scss';

const Offer = () => (
  <section className="section-offer" id="section-offer">
    <div className="offer__section" id="website">
      <img src={number01grey} alt="number" className="offer__number" />
      <ScrollAnimation
        animateIn="slideInRight"
        delay={0}
        animateOnce={true}
        className="offer__title"
      >
        <img src={offerItemImg1} alt="websites" />
        <div className="title__text">
          <h2>Cennik Stron Internetowych</h2>
          <p>
            Naszą specjalnością są strony internetowe. Wszystko dostosowane do urządzeń mobilnych.
            Tworzymy strony statyczne oraz dynamiczne z wykorzystaniem najnowszych technologii.
            Wszystkie strony internetowe, które stworzyliśmy posiadają unikalny i nowoczesny design.
          </p>
        </div>
      </ScrollAnimation>
      <div className="offer__items">
        <ScrollAnimation
          animateIn="slideInLeft"
          delay={100}
          animateOnce={true}
          className="offer__item"
        >
          <img src={sass} alt="website bronze" />
          <p>
            <b>- Do 2 podstron</b>
            <br />
            <b>- 3 dodatki do wyboru</b>
            <br />
            - unikalny projekt graficzny
            <br />
            - dostosowanie do urządzeń mobilnych
            <br />
            - nielimitowane poprawki projektu
            <br />
            - informacja o ciasteczkach i polityka prywatności
            <br />
            - możliwość samodzielnej edycji (CMS)
            <br />
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInLeft"
          delay={100}
          animateOnce={true}
          className="offer__item"
        >
          <img src={sass} alt="website bronze" />
          <p>
            <b>- Do 5 podstron</b>
            <br />
            <b>- 4 dodatków do wyboru</b>
            <br />
            - unikalny projekt graficzny
            <br />
            - dostosowanie do urządzeń mobilnych
            <br />
            - nielimitowane poprawki projektu
            <br />
            - informacja o ciasteczkach i polityka prywatności
            <br />
            - możliwość samodzielnej edycji (CMS)
            <br />
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInLeft"
          delay={100}
          animateOnce={true}
          className="offer__item"
        >
          <img src={sass} alt="website bronze" />
          <p>
            <b>- do 10 podstron</b>
            <br />
            <b>- 6 dodatki do wyboru</b>
            <br />
            <b>- dodatkowy język</b>
            <br />- unikalny projekt graficzny
            <br />
            - dostosowanie do urządzeń mobilnych
            <br />
            - nielimitowane poprawki projektu
            <br />
            - informacja o ciasteczkach i polityka prywatności
            <br />
            - możliwość samodzielnej edycji (CMS)
            <br />
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInLeft"
          delay={100}
          animateOnce={true}
          className="offer__item"
        >
          <img src={sass} alt="website bronze" />
          <p>
            <b>- nielimitowana ilość podstron</b>
            <br />
            <b>- nielimitowana ilość dodatków</b>
            <br />
            <b>- nielimitowana ilość dodatkowych języków</b>
            <br />
            - unikalny projekt graficzny
            <br />
            - dostosowanie do urządzeń mobilnych
            <br />
            - nielimitowane poprawki projektu
            <br />
            - informacja o ciasteczkach i polityka prywatności
            <br />
            - możliwość samodzielnej edycji (CMS)
            <br />
          </p>
        </ScrollAnimation>
      </div>

      <div className="offer__featuresWrapper">
        <ScrollAnimation
          animateIn="slideInRight"
          delay={100}
          animateOnce={true}
          className="offer__features"
        >
          <h2>Dodatki do stron internetowych:</h2>
          <div className="features__items">
            <div className="feature__item">
              <p className="feature__name">dodatkowy język</p>
              <p className="feature__price">15% ceny końowej</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">czat facebook</p>
              <p className="feature__price">100zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">konto google analitics</p>
              <p className="feature__price">60zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">wyskakujące okienko (pop-up)</p>
              <p className="feature__price">80zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">galeria zdjęć</p>
              <p className="feature__price">100zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">mapa</p>
              <p className="feature__price">60zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">blog</p>
              <p className="feature__price">100zł</p>
            </div>
          </div>
          <div className="features__items">
            <div className="feature__item">
              <p className="feature__name">newsletter</p>
              <p className="feature__price">100zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">informacja o ciasteczkach i RODO</p>
              <p className="feature__price">FREE</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">formularz kontaktowy</p>
              <p className="feature__price">60zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Utworzenie dodatkowej podstrony</p>
              <p className="feature__price">od 100zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Skrzynka pocztowa</p>
              <p className="feature__price">60zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">portfolio</p>
              <p className="feature__price">100zł</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>

    <div className="offer__section offer__section--bg" id="store">
      <img src={number02white} alt="number" className="offer__number" />
      <ScrollAnimation
        animateIn="slideInRight"
        delay={100}
        animateOnce={true}
        className="offer__title"
      >
        <img src={offerItemImg2} alt="e-commerce" />
        <div className="title__text">
          <h2>Cennik Sklepów Internetowych (E-commerce)</h2>
          <p>
            Tworzymy sklepy internetowe opartę o najpopularniejsze na świecie narzędzie Woocomerce
            (Wordpress). Do dyspozycji klienta zostawiamy bardzo intuicyjny system zarządzania
            sklepem. Przenieś swój biznes do internetu i powiększ swoje dochody!
          </p>
        </div>
      </ScrollAnimation>
      <div className="offer__items">
        <ScrollAnimation
          animateIn="slideInLeft"
          delay={100}
          animateOnce={true}
          className="offer__item"
        >
          <img src={sass} alt="website bronze" />
          <p>
            <b>- Do 3 podstron</b>
            <br />
            <b>- 3 dodatki do wyboru</b>
            <br />
            <b>- do 2 rodzajów płatności</b>
            <br />
            <b>- do 2 rodzajów wysyłki</b>
            <br />
            <b>- wprowadzenie do 10 produktów</b>
            <br />
            - oparty na Woocomerce
            <br />
            - unikalny projekt graficzny
            <br />
            - dostosowanie do urządzeń mobilnych
            <br />
            - nielimitowane poprawki projektu
            <br />
            - informacja o ciasteczkach i polityka prywatności
            <br />
            - możliwość samodzielnej obsługi sklepu (CMS)
            <br />
            - pomoc techniczna po wdrożeniowa 30 dni
            <br />
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInLeft"
          delay={100}
          animateOnce={true}
          className="offer__item"
        >
          <img src={sass} alt="website bronze" />
          <p>
            <b>- Do 5 podstron</b>
            <br />
            <b>- 4 dodatki do wyboru</b>
            <br />
            <b>- do 3 rodzajów płatności</b>
            <br />
            <b>- do 4 rodzajów wysyłki</b>
            <br />
            <b>- wprowadzenie do 25 produktów</b>
            <br />
            - oparty na Woocomerce
            <br />
            - unikalny projekt graficzny
            <br />
            - dostosowanie do urządzeń mobilnych
            <br />
            - nielimitowane poprawki projektu
            <br />
            - informacja o ciasteczkach i polityka prywatności
            <br />
            - możliwość samodzielnej obsługi sklepu (CMS)
            <br />
            - pomoc techniczna po wdrożeniowa 30 dni
            <br />
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInLeft"
          delay={100}
          animateOnce={true}
          className="offer__item"
        >
          <img src={sass} alt="website bronze" />
          <p>
            <b>- Do 10 podstron</b>
            <br />
            <b>- 6 dodatki do wyboru</b>
            <br />
            <b>- do 5 rodzajów płatności</b>
            <br />
            <b>- do 6 rodzajów wysyłki</b>
            <br />
            <b>- wprowadzenie do 50 produktów</b>
            <br />
            <b>- dodatkowy język</b>
            <br />
            - oparty na Woocomerce
            <br />
            - unikalny projekt graficzny
            <br />
            - dostosowanie do urządzeń mobilnych
            <br />
            - nielimitowane poprawki projektu
            <br />
            - informacja o ciasteczkach i polityka prywatności
            <br />
            - możliwość samodzielnej obsługi sklepu (CMS)
            <br />
            - pomoc techniczna po wdrożeniowa 30 dni
            <br />
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInLeft"
          delay={100}
          animateOnce={true}
          className="offer__item"
        >
          <img src={sass} alt="website bronze" />
          <p>
            <b>- nielimitowana ilość podstron</b>
            <br />
            <b>- nielimitowana ilość dodatków</b>
            <br />
            <b>- nielimitowana ilość płatności</b>
            <br />
            <b>- nielimitowana ilość wysyłki</b>
            <br />
            <b>- wprowadzenie wszystkich przedmiotów</b>
            <br />
            <b>- nielimitowana ilość języków</b>
            <br />
            - oparty na Woocomerce
            <br />
            - unikalny projekt graficzny
            <br />
            - dostosowanie do urządzeń mobilnych
            <br />
            - nielimitowane poprawki projektu
            <br />
            - informacja o ciasteczkach i polityka prywatności
            <br />
            - możliwość samodzielnej obsługi sklepu (CMS)
            <br />
            - pomoc techniczna po wdrożeniowa 30 dni
            <br />
          </p>
        </ScrollAnimation>
      </div>

      <div className="offer__featuresWrapper">
        <ScrollAnimation
          animateIn="slideInRight"
          delay={100}
          animateOnce={true}
          className="offer__features"
        >
          <h2>Dodatki do sklepów internetowych:</h2>
          <div className="features__items">
            <div className="feature__item">
              <p className="feature__name">dodatkowy język</p>
              <p className="feature__price">15% ceny końowej</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">
                Metody płatności: PayU, Przelewy24, PayPal, Przelew Bankowy, Za pobraniem
              </p>
              <p className="feature__price">60zł każda</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Metody dostawy: Poczta, Kurier, Odbiór osobisty</p>
              <p className="feature__price">60zł każda</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">czat facebook</p>
              <p className="feature__price">100zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">konto google analitics</p>
              <p className="feature__price">60zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">wyskakujące okienko (pop-up)</p>
              <p className="feature__price">80zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">galeria zdjęć</p>
              <p className="feature__price">100zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">mapa</p>
              <p className="feature__price">60zł</p>
            </div>
          </div>
          <div className="features__items">
            <div className="feature__item">
              <p className="feature__name">blog</p>
              <p className="feature__price">100zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Kody rabatowe</p>
              <p className="feature__price">60zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">
                Waitlist – powiadom kiedy będzie dostępny produkt 150zł
              </p>
              <p className="feature__price">150zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">newsletter</p>
              <p className="feature__price">100zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">informacja o ciasteczkach i RODO</p>
              <p className="feature__price">FREE</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">formularz kontaktowy</p>
              <p className="feature__price">60zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Utworzenie dodatkowej podstrony</p>
              <p className="feature__price">od 100zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Skrzynka pocztowa</p>
              <p className="feature__price">60zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">portfolio</p>
              <p className="feature__price">100zł</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="slideInRight"
          delay={100}
          animateOnce={true}
          className="offer__features offer__features--padding"
        >
          <h2>Dodatki specjalne:</h2>
          <div className="features__items">
            <div className="feature__item">
              <p className="feature__name">Sklep na Facebooku 100zł</p>
              <p className="feature__price">100zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Sklep na Facebooku + Instagram</p>
              <p className="feature__price">200zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">
                Automatyczna integracja z DPD, InPost, DHL, UPS, Poczta Polska
              </p>
              <p className="feature__price">300zł</p>
            </div>
          </div>
          <div className="features__items">
            <div className="feature__item">
              <p className="feature__name">Integracja z Allegro</p>
              <p className="feature__price">600zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Integracja z Opineo</p>
              <p className="feature__price">200zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Integracja z Ceneo</p>
              <p className="feature__price">250zł</p>
            </div>
          </div>
          <p style={{ fontSize: '10px', marginTop: '10px', marginLeft: '15px' }}>
            * Dodatki specjalne, są płatne zawsze bez względu na rodzaj wybranego pakietu.
          </p>
        </ScrollAnimation>
      </div>
    </div>

    <div className="offer__section" id="graphics">
      <img src={number03grey} alt="number" className="offer__number" />
      <ScrollAnimation
        animateIn="slideInRight"
        delay={100}
        animateOnce={true}
        className="offer__title"
      >
        <img src={offerItemImg3} alt="graphics" />
        <div className="title__text">
          <h2>Cennik usuług graficznych</h2>
          <p>
            Oprócz stron internetowych i sklepów internetowych zajmujemy się także grafiką.
            Potrzebujesz loga, wizytówki czy baneru? Napisz do nas, a nasi graficy się tym zajmą!
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="slideInLeft"
        delay={100}
        animateOnce={true}
        className="offer__featuresWrapper offer__features--padding"
      >
        <div className="offer__features">
          <div className="features__items">
            <div className="feature__item">
              <p className="feature__name">Wizytówka jednostrona</p>
              <p className="feature__price">120zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Wizytówka dwustronna</p>
              <p className="feature__price">160zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Ulotka w wybranym formacie</p>
              <p className="feature__price">od 150zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Baner</p>
              <p className="feature__price">od 150zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Logo</p>
              <p className="feature__price">od 200zł</p>
            </div>
          </div>
          <div className="features__items">
            <div className="feature__item">
              <p className="feature__name">Projekty na Social Media</p>
              <p className="feature__price">od 50zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Stopka e-mail</p>
              <p className="feature__price">od 100zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Projekt katalogu</p>
              <p className="feature__price">od 200zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">
                Projekt graficzny strony internetowej, sklepu, portalu
              </p>
              <p className="feature__price">od 250zł</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>

    <div className="offer__section  offer__section--bg" id="administration">
      <img src={number04white} alt="number" className="offer__number" />
      <ScrollAnimation
        animateIn="slideInRight"
        delay={100}
        animateOnce={true}
        className="offer__title"
      >
        <img src={offerItemImg4} alt="administration and fix" />
        <div className="title__text">
          <h2>Cennik administracji i naprawa</h2>
          <p>
            Internet jest pełen zepsutych, zaniedbanych lub przestarzałych stron internetowych.
            Dobieramy odpowiednie metody do zaistniałej sytuacji: naprawiamy, poprawiamy lub
            oferujemy nową, wysoką jakość.
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="slideInLeft"
        delay={100}
        animateOnce={true}
        className="offer__featuresWrapper offer__features--padding"
      >
        <div className="offer__features">
          <div className="features__items">
            <div className="feature__item">
              <p className="feature__name">Poprawka lub zmiana w tekście</p>
              <p className="feature__price">40zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Poprawka lub zmiana graficzna</p>
              <p className="feature__price">40-80zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Dodanie postrony</p>
              <p className="feature__price">od 100zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Zmiana układu menu/podstron w tym usunięcie</p>
              <p className="feature__price">60zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Podstawowe SEO</p>
              <p className="feature__price">250zł</p>
            </div>
          </div>
          <div className="features__items">
            <div className="feature__item">
              <p className="feature__name">Optymalizacja</p>
              <p className="feature__price">200zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">administracja sklepu internetowego</p>
              <p className="feature__price">od 120zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Administracja strony internetowej</p>
              <p className="feature__price">od 50zł</p>
            </div>
            <div className="feature__item">
              <p className="feature__name">Naprawa twojej starej strony</p>
              <p className="feature__price">od 200zł</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  </section>
);

export default Offer;
