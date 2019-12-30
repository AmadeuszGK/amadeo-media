import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import offerItem1 from "../images/offer-item-1.png"
import offerItem2 from "../images/offer-item-2.png"
import offerItem3 from "../images/offer-item-3.png"
import offerItemImg1 from "../images/offer-item-img-1.png"
import offerItemImg2 from "../images/offer-item-img-2.png"
import offerItemImg3 from "../images/offer-item-img-3.png"
import number01 from "../images/number-01.png"
import number02 from "../images/number-02.png"
import number03 from "../images/number-03.png"


const Offer = () => (
  <section className="section-offer" id="section-offer">
      <div className="offer-item--nobg">
        <ScrollAnimation className="top-text" animateIn="slideInLeft" delay={400} animateOnce={true} className="offer-item__image">
          <img src={offerItem1}/>
          <div className="offer-item__portfolio-container mobile-only">
            <div className="offer-item__portfolio">
              <div className="what__specification__btn__icon p-event-none">
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
              </div>
              <a href="/portfolio">Zobacz przykłady stron jakie wykonaliśmy</a>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className="top-text" animateIn="slideInRight" delay={1000} animateOnce={true} className="offer-item__image" className="offer-item__desc">
          <div className="offer-item__number">
            <img src={number01} />
          </div>
          <div className="desc__header">
            <img src={offerItemImg1} className="desc-header__image"/>
            <h2>Strony internetowe</h2>
          </div>
          <p className="offer-item__about">Każda strona jest inna, dlatego nie posiadamy sztywnego cennika i każdą stronę wyceniamy indywidualnie. Na końcową cenę składają się m.in. ilość podstron i treści, wykorzysywane technologie, ilość języków na stronie czy skomplikowanie graficzne.</p>
          <div className="desc__variant">
            <h3>Od 800zł netto</h3>
            <p>Strony typu One Page. Są to strony internetowe składające się z „jednej strony” głównej, często wydłużonej, po której można poruszać się przesuwając scrollem, używając specjalnej nawigacji na stronie lub głównego menu strony. Menu strony nie przenosi do podstron, których na takiej stronie nie ma, a do odpowiedniego miejsca na stronie. </p>
          </div>
          <div className="desc__variant">
            <h3>Od 1700zł netto</h3>
            <p>Rozbudowana strona z wieloma podstronami i systemem zarządzania CMS, dzięki któremu będziesz mógł aktualizować treści samodzielnie. Najlepszy wybór dla małych i średnich firm.<a href="/">Przykład.</a></p>
          </div>
          <div className="offer-item__portfolio-container desktop-only">
            <div className="offer-item__portfolio">
              <div className="what__specification__btn__icon p-event-none">
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
              </div>
              <a href="/portfolio">Zobacz przykłady stron jakie wykonaliśmy</a>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className="offer-item--bg">
        <ScrollAnimation className="top-text" animateIn="slideInLeft" delay={400} animateOnce={true} className="offer-item__desc offer-item__desc--left">
          <div className="offer-item__number">
            <img src={number02} />
          </div>
          <div className="desc__header">
            <img src={offerItemImg2} className="desc-header__image"/>
            <h2>Sklepy internetowe (E-commerce)</h2>
          </div>
          <p className="offer-item__about">Sklep internetowy to automatyczna platforma sprzedażowa działająca 24h/dobę przez 365 dni w roku. Wszystkie sklepy opieramy na najpopularniejszym obecnie rozwiązaniu Woocommerce. Na cenę sklepu wpływają ilość metod płatności, metod dostaw, produktów oraz dodatkowe integracje.
</p>
          <div className="desc__variant">
            <h3>Od 3000zł netto</h3>
            <p>Sklep oparty o Wordpress Woocommerce, który z łatwością będziesz mogł obsługiwać sam. Ty decydujesz jakie funkcje mają się w nim znajdować. Zapewniamy integrację z: <br /><br /> - metodami płatności jak PayU, Przelewy24, PayPal, DotPay, iMoje itd.<br />- metodami wysyłki jak DHL, inPost, DPD, UPS, Pocztą Polską itd.<br />- oraz wtyczkami Allegro, Facebook, Instagram, Google Shopping, Przucony koszyk, Newsletter, Wishlist itd.</p>
          </div>
          <div className="offer-item__portfolio-container desktop-only">
            <div className="offer-item__portfolio">
              <div className="what__specification__btn__icon p-event-none">
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
              </div>
              <a href="/portfolio">Zobacz przykłady sklepów jakie wykonaliśmy</a>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className="top-text" animateIn="slideInRight" delay={1000} animateOnce={true} className="offer-item__image">
          <img src={offerItem2}/>
          <div className="offer-item__portfolio-container mobile-only">
            <div className="offer-item__portfolio">
              <div className="what__specification__btn__icon p-event-none">
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
              </div>
              <a href="/portfolio">Zobacz przykłady sklepów jakie wykonaliśmy</a>
            </div>
          </div>
        </ScrollAnimation>
      </div>


      <div className="offer-item--nobg">
        <ScrollAnimation className="top-text" animateIn="slideInLeft" delay={400} animateOnce={true} className="offer-item__image">
          <img src={offerItem3}/>
          <div className="offer-item__portfolio-container mobile-only">
            <div className="offer-item__portfolio">
              <div className="what__specification__btn__icon p-event-none">
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
              </div>
              <a href="/portfolio">Zobacz projekty, przy których pracowaliśmy</a>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className="top-text" animateIn="slideInRight" delay={1000} animateOnce={true} className="offer-item__desc">
          <div className="offer-item__number">
            <img src={number03} />
          </div>
          <div className="desc__header">
            <img src={offerItemImg3} className="desc-header__image"/>
            <h2>Modyfikacje, grafika, administracja, SEO</h2>
          </div>
          <div className="desc__variant">
            <h3>Modyfikacje 70zł netto za godzinę</h3>
            <p>Czasami ciezko swierdzić co jest problemem na twojej starej stornie, dlatego posługujemy się tez stawką godzinową. Nie musisz się tego bać, zawszę przewidujemy czas modyfikacji i umawiamy się na konkretną kwotę. Jeśli zajmie nam to więcej czasu, ty nie ponosisz dodatkowych kosztów.</p>
          </div>
          <div className="desc__variant">
            <h3>Grafika od 100zł netto</h3>
            <p>Nasz zespół to takze kreatywni graficy. Tworzymy loga, katalogi, projekty stron, wizytówki, stopki emailowe, reklamy, banery itd.</p>
          </div>
          <div className="desc__variant">
            <h3>Administracja od 150zł netto miesięcznie</h3>
            <p>Nie masz czasu albo nie wiesz jak zajmować się stroną? Oddaj ją w nasze ręce. Będziemy czówać nad tym, aby strona działała jak nalezy, będziemy tworzyć kopie zapasowe oraz dbać o jej bezpieczeństwo. Mozemy tez zająć się aktualizowaniem danych na stronie.</p>
          </div>
          <div className="offer-item__portfolio-container desktop-only">
            <div className="offer-item__portfolio">
              <div className="what__specification__btn__icon p-event-none">
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
                <span class="p-event-none"></span>
              </div>
              <a href="/portfolio">Zobacz projekty, przy których pracowaliśmy</a>
            </div>
          </div>
        </ScrollAnimation>
      </div>

  </section>
);

export default Offer;
