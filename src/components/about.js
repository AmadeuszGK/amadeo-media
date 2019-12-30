
import React from "react";
import $ from "jquery";
import ScrollAnimation from "react-animate-on-scroll";

//////////////  TYPING START ////////////////////
var words = [
  "QUADRIGA GMBH",
  "GOODSIDE",
  "WOLNOŚCI 14",
  "PROMATIC GROUP",
  "INLEI ITALY",
  "CHIARASHOP",
  "JMA EXPERT",
  "Q-RENT",
  "PAŁKA GOŁĘBIE"
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 10,
  speed = 120;

var wordflick = function() {
  setInterval(function() {
    if (forwards) {
      if (offset >= words[i].length) {
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
    part = words[i].substr(0, offset);
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

////////////// TYPING END ////////////////////


class About extends React.Component {

  componentDidMount() {
    wordflick()
  }

  render () {
    return (  <section className="section-about-me" id="section-about-me">
    <div className="about-me">
      <ScrollAnimation
        className="about-me-text"
        animateIn="slideInLeft"
        delay={400}
        animateOnce={true}
      >
        <div className="about-me-header">
          <div className="flat-line" />
          <p className="flat-line-text">O NAS</p>
        </div>

        <h1>Amadeo Media</h1>

        <p>
          Cześć, jesteśmy młodym,<br />kreatywnym zespołem programistów,<br />
          Stwórzmy coś razem!
        </p>

        <a href="/oferta" rel="noopener noreferrer">OFERTA</a>

        <div className="typing-box">
          <p>Dumni ze współpracy z&nbsp;&nbsp;</p>
          <div className="word" />
        </div>
      </ScrollAnimation>

      <div className="about-me-images">
        <ScrollAnimation
          className="about-me-image"
          animateIn="slideInRight"
          delay={1200}
          animateOnce={true}
        />
        <ScrollAnimation
          className="about-me-box"
          animateIn="slideInRight"
          delay={1200}
          animateOnce={true}
        />
      </div>
    </div>
  </section>)
  }
};

export default About;
