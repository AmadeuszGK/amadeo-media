
import React from "react";
import $ from "jquery";
import ScrollAnimation from "react-animate-on-scroll";

//////////////  TYPING START ////////////////////
var wordss = [
  "Projektujemy",
  "Naprawiamy",
  "Tworzymy",
  "Dostosowujemy",
  "Pozycjonujemy"
  ],
  part,
  i = 0,
  offset = 0,
  len = wordss.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 10,
  speed = 120;

var changeword = function() {
  setInterval(function() {
    if (forwards) {
      if (offset >= wordss[i].length) {
        ++skip_count;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = wordss[i].substr(0, offset);
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".words").text(part);
  }, speed);
};

////////////// TYPING END ////////////////////


class Top extends React.Component {

  componentDidMount() {
    changeword()
  }

  render () {
    return (  <section className="section-top" id="section-top">
    <div className="top">
      <ScrollAnimation
        className="top-text"
        animateIn="slideInLeft"
        delay={400}
        animateOnce={true}
      >
        <div className="top-header">
          <div className="flat-line" />
          <p className="flat-line__text">OFERTA I CENNIK</p>
        </div>

        <div className="words" />
        <h1>strony i sklepy internetowe</h1>

        <p>
        Nasze usługi charakteryzują przejrzyste ceny, które ustalane są na etapie darmowych konsultacji.<br /><br />
        Poniej przedstawione zostały przykładowe ceny.
        </p>

        <a href="#section-offer" rel="noopener noreferrer">DALEJ</a>

      </ScrollAnimation>

      {/* <div className="top-images">
        <ScrollAnimation
          className="top-image"
          animateIn="slideInRight"
          delay={1200}
          animateOnce={true}
        />
        <ScrollAnimation
          className="top-box"
          animateIn="slideInRight"
          delay={1200}
          animateOnce={true}
        />
      </div> */}
    </div>
  </section>)
  }
};

export default Top;
