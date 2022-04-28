import React, { useEffect, useState } from 'react';
import { withTrans } from '../i18n/withTrans';
import Menu from './Menu/Menu';
import Footer from '../components/Footer/Footer';
import Cookies from '../components/Cookies/Cookies';

const Layout = ({ children, t }) => {
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    setShowCookies(localStorage.getItem('Cookies') === 'accepted' ? false : true);
  }, []);

  const hideCookies = () => {
    setShowCookies(false);
    localStorage.setItem('Cookies', 'accepted');
  };

  return (
    <div className="layout">
      <Menu />
      {children}
      <Footer />
      <div className="test">{t(`site.footer`)}</div>
      {showCookies && <Cookies hideCookies={hideCookies} />}
    </div>
  );
};

export default withTrans(Layout);
