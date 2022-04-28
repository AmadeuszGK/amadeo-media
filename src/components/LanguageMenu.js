import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageMenu = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState();

  useEffect(() => {
    localStorage.getItem('Language') && setCurrentLang(localStorage.getItem('Language') === 'en' ? 'en' : 'pl');
    localStorage.getItem('Language') && i18n.changeLanguage(localStorage.getItem('Language') === 'en' ? 'en' : 'pl');
  }, []);

  function changeLang(value) {
    i18n.changeLanguage(value);
    localStorage.setItem('Language', value);
    setCurrentLang(value);
  }

  return (
    <div className="toggle-btn" onClick={() => changeLang(currentLang === 'pl' ? 'en' : 'pl')}>
      {currentLang === 'en' && <span>PL</span>}
      {currentLang === 'pl' && <span>EN</span>}
    </div>
  );
};

export default LanguageMenu;
