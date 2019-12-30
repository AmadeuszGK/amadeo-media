
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import promaticGamesLogo from "../images/promaticgames-logo.png"
import wolnosci14Logo from "../images/wolnosci14-logo.png"
import chiarashopLogo from "../images/chiarashop-logo.png"
import inleiLogo from "../images/inlei-logo.png"
import goodsideLogo from "../images/goodside-logo.png"
import quadrigaLogo from "../images/quadriga-logo.png"
import palkaLogo from "../images/palka-logo.png"
import qrentLogo from "../images/qrent-logo.png"
import efunLogo from "../images/efun-logo.png"
import jmaLogo from "../images/jma-logo.png"

const Clients = () => {
    return (
      <section className="section-clients" id="section-clients">
        <div className="clients-container">
          <ScrollAnimation
            className="clients-container-content"
            animateIn="fadeIn"
            delay={300}
            animateOnce={true}
          >
            <div className="clients-about">
              <div className="clients-header">
                <div className="flat-line" />
                <p>Współpraca</p>
              </div>

              <h2>Zadowoleni klienci</h2>
              <p className="clients-text">
                Współpracowaliśmy z firmami z Polski, Niemiec, Angli i Włoch. Dołącz do grona naszych zadowolonych klientów. Aby objerzeć co dla nich przygotowaliśmy, przejdź do podstrony clients, lub kliknij <a href="/clients">tutaj.</a> 
              </p>
            </div>

            <div className="clients-items">
              <div
                className="clients-item"
              >
                <img
                  src={promaticGamesLogo}
                  alt="promatic games"
                />
              </div>
              <div
                className="clients-item"
              >
                <img
                  src={goodsideLogo}
                  alt="goodside"
                />
              </div>
              <div
                className="clients-item"
              >
                <img src={wolnosci14Logo} alt="wolności 14" />
              </div>
              <div
                className="clients-item"
              >
                <img src={chiarashopLogo} alt="chiarashop" />
              </div>
              <div
                className="clients-item"
              >
                <img src={inleiLogo} alt="inlei" />
              </div>
              <div
                className="clients-item q-rent"
              >
                <img src={qrentLogo} alt="q-rent" />
              </div>
              <div
                className="clients-item"
              >
                <img src={quadrigaLogo} alt="quadriga" />
              </div>
              <div
                className="clients-item"
              >
                <img src={palkaLogo} alt="pałka" />
              </div>
              <div
                className="clients-item"
              >
                <img src={efunLogo} alt="e-fun" />
              </div>
              <div
                className="clients-item"
              >
                <img src={jmaLogo} alt="jma-expert" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    );
  }

export default Clients;
