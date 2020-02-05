import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'gatsby';
import amadeuszLogo from '../../../images/agrzesiak2-logo.png';
import wolnosci14Logo from '../../../images/wolnosci14-logo.png';
import chiarashopLogo from '../../../images/chiarashop-logo.png';
import inleiLogo from '../../../images/inlei-logo.png';
import goodsideLogo from '../../../images/goodside-logo.png';
import quadrigaLogo from '../../../images/quadriga-logo.png';
import palkaLogo from '../../../images/palka-logo.png';
import qrentLogo from '../../../images/qrent-logo.png';
import quadrigaBusinessLogo from '../../../images/quadrigaBusiness-logo.png';
import jmaLogo from '../../../images/jma-logo.png';
import SectionTop from '../../SectionTop/SectionTop';
import './ClientsHome.scss';

const topText = (
  <p style={{ color: '#fff' }}>
    Współpracowaliśmy z firmami z Polski, Niemiec, Angli i Włoch. Dołącz do grona naszych
    zadowolonych klientów. Aby objerzeć co dla nich przygotowaliśmy, przejdź do podstrony Portfolio,
    lub kliknij <Link to="/portfolio">tutaj.</Link>{' '}
  </p>
);
const bigHeader = <h2>Zadowoleni klienci</h2>;
const smallHeader = 'WSPÓŁPRACA';

const ClientsHome = () => {
  const clientsItems = [
    {
      logo: amadeuszLogo,
      alt: 'amadeusz grzesiak',
      key: 'amadeuszLogo',
      link: 'https://amadeuszgrzesiak.com',
    },
    {
      logo: wolnosci14Logo,
      alt: 'wolnosci 14',
      key: 'wolnosci14Logo',
      link: 'https://wolnosci14.pl',
    },
    {
      logo: chiarashopLogo,
      alt: 'chiarashop',
      key: 'chiarashopLogo',
      link: 'https://chiarashop.pl',
    },
    {
      logo: inleiLogo,
      alt: 'inlei',
      key: 'inleiLogo',
      link: 'https://inlei.pl',
    },
    {
      logo: goodsideLogo,
      alt: 'goodside',
      key: 'goodsideLogo',
      link: 'http://goodside.com.pl',
    },
    {
      logo: quadrigaLogo,
      alt: 'quadriga one',
      key: 'quadrigaLogo',
      link: 'http://quadriga.one',
    },
    {
      logo: palkaLogo,
      alt: 'palka',
      key: 'palkaLogo',
      link: 'http://palkagolebie.pl',
    },
    {
      logo: qrentLogo,
      alt: 'qrent',
      key: 'qrentLogo',
      link: 'http://q-rent.eu/',
    },
    {
      logo: quadrigaBusinessLogo,
      alt: 'quadriga business',
      key: 'quadriga business',
      link: 'http://quadriga-business.de',
    },
    {
      logo: jmaLogo,
      alt: 'jma expert',
      key: 'jmaLogo',
      link: 'http://jmaexpert.de',
      last: true,
    },
  ];

  return (
    <section className="section__clients" id="section__clients">
      <div className="clients__container">
        <div className="clients__wrapper">
          <SectionTop
            smallHeader={smallHeader}
            bigHeader={bigHeader}
            paragraph={topText}
            colorWhite
          />

          <ScrollAnimation
            animateIn="slideInRight"
            delay={100}
            animateOnce={true}
            className="clients__items"
          >
            {clientsItems.map(item => (
              <div className="clients__item" id={item.last && 'client__item--last'} key={item.key}>
                <a href={item.link}>
                  <img src={item.logo} alt={item.alt} />
                </a>
              </div>
            ))}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ClientsHome;
