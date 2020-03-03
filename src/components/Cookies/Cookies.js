import React, { Component } from 'react';
import './Cookies.scss';
import CookiesImg from '../../images/cookies.png';
import { Link } from 'gatsby';

class Cookies extends Component {
  state = {
    showCookies: true,
  };

  setCookies = () => {
    localStorage.setItem('Cookies', 'true');
    this.setState({ showCookies: false });
  };

  render() {
    return (
      <div
        className="cookies"
        style={{
          display: this.state.showCookies ? 'flex' : 'none',
        }}
      >
        <div className="cookies__text">
          <img src={CookiesImg} alt="cookies" />
          <p>
            Ta strona używa plików Cookies. Jeśli będziesz kontynuować przeglądanie tej witryny,
            założymy, że akceptujesz naszą
            <Link to="/privacy-policy">
              <nobr> politykę prywatności i cookies.</nobr>
            </Link>
          </p>
        </div>
        <button className="button cookies__button" onClick={this.setCookies}>
          <nobr>TAK, AKCEPTUJĘ</nobr>
        </button>
      </div>
    );
  }
}

export default Cookies;
