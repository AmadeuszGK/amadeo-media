import React from 'react';
import { Link } from 'gatsby';
import wolnosci14Logo from '../../../images/wolnosci14-logo.png';
import chiarashopLogo from '../../../images/chiarashop-logo.png';
import inleiLogo from '../../../images/inlei-logo.png';
import goodsideLogo from '../../../images/goodside-logo.png';
import quadrigaLogo from '../../../images/quadriga-logo.png';
import databoutLogo from '../../../images/databout-logo.png';
import palkaLogo from '../../../images/palka-logo.png';
import promaticLogo from '../../../images/promatic-logo.png';
import quadrigaBusinessLogo from '../../../images/quadrigaBusiness-logo.png';
import jmaLogo from '../../../images/jma-logo.png';
import SectionTop from '../../SectionTop/SectionTop';
import './ClientsHome.scss';

const topText = (
  <p style={{ color: '#fff' }}>
    Współpracowałem z firmami z Polski, Niemiec, Angli i Włoch. Dołącz do grona zadowolonych
    klientów. Aby objerzeć co dla nich przygotowałem, przejdź do podstrony Portfolio, lub kliknij{' '}
    <Link to="/portfolio">tutaj.</Link>{' '}
  </p>
);
const bigHeader = <h2>Zadowoleni klienci</h2>;
const smallHeader = 'WSPÓŁPRACA';

const ClientsHome = () => {
  const clientsItems = [
    {
      logo: databoutLogo,
      alt: 'databout logo',
      key: 'databoutLogo',
    },
    {
      logo: wolnosci14Logo,
      alt: 'wolnosci 14',
      key: 'wolnosci14Logo',
    },
    {
      logo: chiarashopLogo,
      alt: 'chiarashop',
      key: 'chiarashopLogo',
    },
    {
      logo: inleiLogo,
      alt: 'inlei',
      key: 'inleiLogo',
    },
    {
      logo: goodsideLogo,
      alt: 'goodside',
      key: 'goodsideLogo',
    },
    {
      logo: quadrigaLogo,
      alt: 'quadriga one',
      key: 'quadrigaLogo',
    },
    {
      logo: palkaLogo,
      alt: 'palka',
      key: 'palkaLogo',
    },
    {
      logo: promaticLogo,
      alt: 'qrent',
      key: 'qrentLogo',
    },
    {
      logo: quadrigaBusinessLogo,
      alt: 'quadriga business',
      key: 'quadriga business',
    },
    {
      logo: jmaLogo,
      alt: 'jma expert',
      key: 'jmaLogo',
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

          <div className="clients__items">
            {clientsItems.map(item => (
              <div className="clients__item" id={item.last && 'client__item--last'} key={item.key}>
                <img src={item.logo} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsHome;
