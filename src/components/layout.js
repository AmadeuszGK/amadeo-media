import React, { useEffect, useState } from 'react';
import Menu from './Menu/Menu';
import Footer from '../components/Footer/Footer';
import Cookies from '../components/Cookies/Cookies';

const Layout = ({ children }) => {
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
      {showCookies && <Cookies hideCookies={hideCookies} />}
      <link
        as="style"
        rel="stylesheet preload prefetch"
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:wght@300;400;500;600;700;800&display=swap"
        type="text/css"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default Layout;
