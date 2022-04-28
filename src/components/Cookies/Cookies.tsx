import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

type CookiesProps = {
  hideCookies: () => void;
};

const Cookies: React.FC<CookiesProps> = ({ hideCookies }) => {
  return (
    <div className="cookies">
      <div className="cookies__text">
        <StaticImage src="../../images/cookies.png" alt="cookies" width={40} placeholder="blurred" layout="constrained" />
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
