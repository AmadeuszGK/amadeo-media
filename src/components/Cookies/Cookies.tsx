import React from 'react';
import CookiesImg from '../../images/cookies.png';

type CookiesProps = {
  hideCookies: () => void;
};

const Cookies: React.FC<CookiesProps> = ({ hideCookies }) => {
  return (
    <div className="cookies">
      <div className="cookies__text">
        <img src={CookiesImg} alt="cookies" />
        <p className="text">
          Ta strona używa plików Cookies. Jeśli będziesz kontynuować przeglądanie tej witryny, założymy, że akceptujesz
          <a href="/polityka-prywatnosci"> politykę prywatności i cookies.</a>
        </p>
      </div>
      <button className="btn" onClick={() => hideCookies()}>
        TAK, AKCEPTUJĘ
      </button>
    </div>
  );
};

export default Cookies;
