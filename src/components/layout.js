import React, { useEffect, useState } from 'react';
import { withTrans } from '../i18n/withTrans';
import Menu from './Menu/Menu';
import Footer from '../components/Footer/Footer';
import Cookies from '../components/Cookies/Cookies';

const Layout = ({ children, t }) => {
  const [cookies, setCookies] = useState(true);

  useEffect(() => {
    setCookies({ cookies: localStorage.getItem('Cookies') });
  }, []);

  return (
    <div className="layout">
      <Menu />
      {children}
      <Footer />
      <div className="test">{t(`site.footer`)}</div>
      {cookies ? null : <Cookies />}
    </div>
  );
};

export default withTrans(Layout);
