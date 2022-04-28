import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ClientsHome = () => {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-background">
          <div className="testimonials-title">
            <h3 className="sub-heading">Współpraca</h3>
            <h2 className="heading">Zadowoleni klienci</h2>
          </div>
          <StaticImage
            src="../../../images/circle2.png"
            alt="circle shape"
            width={170}
            placeholder="blurred"
            layout="constrained"
            className="circle"
          />
          <StaticImage
            src="../../../images/square1.png"
            alt="square shape"
            width={70}
            placeholder="blurred"
            layout="constrained"
            className="square"
          />
          <div className="clients__item">
            <StaticImage
              src="../../../images/databout-logo.png"
              alt="databout logo"
              width={80}
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="clients__item">
            <StaticImage
              src="../../../images/wolnosci14-logo.png"
              alt="wolnosci 14"
              width={80}
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="clients__item">
            <StaticImage
              src="../../../images/chiarashop-logo.png"
              alt="chiarashop"
              width={80}
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="clients__item">
            <StaticImage src="../../../images/inlei-logo.png" alt="inlei" width={80} placeholder="blurred" layout="constrained" />
          </div>
          <div className="clients__item">
            <StaticImage
              src="../../../images/goodside-logo.png"
              alt="goodside"
              width={80}
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="clients__item">
            <StaticImage
              src="../../../images/quadriga-logo.png"
              alt="quadriga"
              width={80}
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="clients__item">
            <StaticImage
              src="../../../images/mkprestige-logo.svg"
              alt="mkprestige"
              width={80}
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="clients__item">
            <StaticImage
              src="../../../images/promatic-logo.png"
              alt="promatic"
              width={80}
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="clients__item">
            <StaticImage
              src="../../../images/secretpleasure-logo.svg"
              alt="secret pleasure"
              width={80}
              placeholder="blurred"
              layout="constrained"
            />
          </div>
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonials-title">
                <h3 className="sub-heading">Współpraca</h3>
                <h2 className="heading">Zadowoleni klienci</h2>
              </div>
              <p className="text">
                Współpracowałem z firmami z Polski, Niemiec, Angli i Włoch. Dołącz do grona zadowolonych klientów. Aby objerzeć co
                dla nich przygotowałem, przejdź do podstrony Portfolio, lub kliknij tutaj.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsHome;
