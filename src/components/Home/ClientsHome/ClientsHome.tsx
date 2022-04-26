import React from 'react';
import wolnosci14Logo from '../../../images/wolnosci14-logo.png';
import chiarashopLogo from '../../../images/chiarashop-logo.png';
import inleiLogo from '../../../images/inlei-logo.png';
import goodsideLogo from '../../../images/goodside-logo.png';
import quadrigaLogo from '../../../images/quadriga-logo.png';
import databoutLogo from '../../../images/databout-logo.png';
import mkprestigeLogo from '../../../images/mkprestige-logo.svg';
import promaticLogo from '../../../images/promatic-logo.png';
import secretpleasureLogo from '../../../images/secretpleasure-logo.svg';
import square1 from '../../../images/square1.png';
import circle2 from '../../../images/circle2.png';

const ClientsHome: React.FC = () => {
  const clientsItems = [
    {
      logo: databoutLogo,
      name: 'databout logo',
    },
    {
      logo: wolnosci14Logo,
      name: 'wolnosci 14',
    },
    {
      logo: chiarashopLogo,
      name: 'chiarashop',
    },
    {
      logo: inleiLogo,
      name: 'inlei',
    },
    {
      logo: goodsideLogo,
      name: 'goodside',
    },
    {
      logo: quadrigaLogo,
      name: 'quadriga one',
    },
    {
      logo: mkprestigeLogo,
      name: 'mk prestige',
    },
    {
      logo: promaticLogo,
      name: 'qrent',
    },
    {
      logo: secretpleasureLogo,
      name: 'secret pleasure',
    },
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-background">
          <img src={circle2} alt="circle" className="circle" />
          <img src={square1} alt="square" className="square" />
          {clientsItems.map(item => (
            <div className="clients__item" id={item.last && 'client__item--last'} key={item.name}>
              <img src={item.logo} alt={item.name} />
            </div>
          ))}
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonials-title">
                <h3 className="sub-heading">Współpraca</h3>
                <h2 className="heading">Zadowoleni klienci</h2>
              </div>
              <p className="text">
                Współpracowałem z firmami z Polski, Niemiec, Angli i Włoch. Dołącz do grona zadowolonych klientów. Aby objerzeć co
                dla nich przygotowałem, przejdź do podstrony Portfolio, lub kliknij tutaj.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsHome;
