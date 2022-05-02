import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { withTrans } from '../../i18n/withTrans';

type CookiesProps = {
  hideCookies: () => void;
  t: any;
};

const Cookies: React.FC<CookiesProps> = ({ hideCookies, t }) => {
  return (
    <div className="cookies">
      <div className="cookies__text">
        <StaticImage src="../../images/cookies.png" alt="cookies" width={40} placeholder="blurred" layout="constrained" />
        <p className="text">
          {t(`cookies.text1`)}
          <a href="/polityka-prywatnosci"> {t(`cookies.text2`)}</a>
        </p>
      </div>
      <button className="btn" onClick={() => hideCookies()}>
        {t(`cookies.button`)}
      </button>
    </div>
  );
};

export default withTrans(Cookies);
