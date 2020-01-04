
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

// import promaticGamesLogo from '../../../images/promaticgamesBg'
import wolnosci14Logo from "../../../images/wolnosci14-logo.png"
import chiarashopLogo from "../../../images/chiarashop-logo.png"
import inleiLogo from "../../../images/inlei-logo.png"
import goodsideLogo from "../../../images/goodside-logo.png"
import quadrigaLogo from "../../../images/quadriga-logo.png"
import palkaLogo from "../../../images/palka-logo.png"
import qrentLogo from "../../../images/qrent-logo.png"
import efunLogo from "../../../images/efun-logo.png"
import jmaLogo from "../../../images/jma-logo.png"
import './ClientsHome.scss'

const ClientsHome = () => {
    const clientsItems = [
      {
        logo: wolnosci14Logo,
        alt: 'promatic games',
        key: 'promaticGamesLogo'
      },
      {
        logo: wolnosci14Logo,
        alt: 'wolnosci 14',
        key: 'wolnosci14Logo'
      },
      {
        logo: chiarashopLogo,
        alt: 'chiarashop',
        key: 'chiarashopLogo'
      },
      {
        logo: inleiLogo,
        alt: 'inlei',
        key: 'inleiLogo'
      },
      {
        logo: goodsideLogo,
        alt: 'goodside',
        key: 'goodsideLogo'
      },
      {
        logo: quadrigaLogo,
        alt: 'quadriga',
        key: 'quadrigaLogo'
      },
      {
        logo: palkaLogo,
        alt: 'palka',
        key: 'palkaLogo'
      },
      {
        logo: qrentLogo,
        alt: 'qrent',
        key: 'qrentLogo'
      },
      {
        logo: efunLogo,
        alt: 'efun',
        key: 'efunLogo'
      },
      {
        logo: jmaLogo,
        alt: 'jma expert',
        key: 'jmaLogo'
      },
    ]

    return (
      <section className="section__clients" id="section__clients">
        <div className="clients__container">
          <ScrollAnimation
            className="clients__wrapper"
            animateIn="fadeIn"
            delay={300}
            animateOnce={true}
          >
            <div className="clients__about">
              <div className="clients__header">
                <div className="flat-line" />
                <p>WSPÓŁPRACA</p>
              </div>

              <h2>Zadowoleni klienci</h2>
              <p className="clients__text">
                Współpracowaliśmy z firmami z Polski, Niemiec, Angli i Włoch. Dołącz do grona naszych zadowolonych klientów. Aby objerzeć co dla nich przygotowaliśmy, przejdź do podstrony clients, lub kliknij <a href="/clients">tutaj.</a> 
              </p>
            </div>

             <div className="clients__items">
            {
              clientsItems.map(item => <div
                className="clients__item" key={item.key}
              >
                <img
                  src={item.logo}
                  alt={item.alt}
                />
              </div>)
              }
            </div>

          </ScrollAnimation>
        </div>
      </section>
    );
  }

export default ClientsHome;
