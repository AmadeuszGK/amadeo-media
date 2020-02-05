import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'gatsby';
// import promaticGamesLogo from '../../../images/promaticgamesBg'
import wolnosci14Logo from '../../../images/wolnosci14-logo.png';
import chiarashopLogo from '../../../images/chiarashop-logo.png';
import inleiLogo from '../../../images/inlei-logo.png';
import goodsideLogo from '../../../images/goodside-logo.png';
import quadrigaLogo from '../../../images/quadriga-logo.png';
import palkaLogo from '../../../images/palka-logo.png';
import qrentLogo from '../../../images/qrent-logo.png';
import efunLogo from '../../../images/efun-logo.png';
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
      logo: wolnosci14Logo,
      alt: 'promatic games',
      key: 'promaticGamesLogo',
      link: 'dupa',
    },
    {
      logo: wolnosci14Logo,
      alt: 'wolnosci 14',
      key: 'wolnosci14Logo',
      link: 'dupa',
    },
    {
      logo: chiarashopLogo,
      alt: 'chiarashop',
      key: 'chiarashopLogo',
      link: 'dupa',
    },
    {
      logo: inleiLogo,
      alt: 'inlei',
      key: 'inleiLogo',
      link: 'dupa',
    },
    {
      logo: goodsideLogo,
      alt: 'goodside',
      key: 'goodsideLogo',
      link: 'dupa',
    },
    {
      logo: quadrigaLogo,
      alt: 'quadriga',
      key: 'quadrigaLogo',
      link: 'dupa',
    },
    {
      logo: palkaLogo,
      alt: 'palka',
      key: 'palkaLogo',
      link: 'dupa',
    },
    {
      logo: qrentLogo,
      alt: 'qrent',
      key: 'qrentLogo',
      link: 'dupa',
    },
    {
      logo: efunLogo,
      alt: 'efun',
      key: 'efunLogo',
      link: 'dupa',
    },
    {
      logo: jmaLogo,
      alt: 'jma expert',
      key: 'jmaLogo',
      link: 'dupa',
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
