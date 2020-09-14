import React from 'react';
import './Skills.scss';

import javascript from '../../images/javascript.png';
import html5 from '../../images/html5.png';
import css3 from '../../images/css3.png';
import angular from '../../images/angular.png';
import reactjs from '../../images/reactjs.png';
import firebase from '../../images/firebase.png';
import sass from '../../images/sass.png';
import es6 from '../../images/es6.png';
import bootstrap from '../../images/bootstrap.png';
import wordpress from '../../images/wordpress.png';
import photoshop from '../../images/photoshop.png';
import figma from '../../images/figma.png';

const Skills = () => (
  <section className="section-skills" id="section-skills">
    <div className="skills-box">
      <div className="skills-top-square" />
      <div className="skills-bottom-square" />
      <div className="skills-desc">
        <h2>
          Najnowsze
          <br />
          technologie
        </h2>
        <p>
          Moje projekty tworzone są w oparciu o najnowsze technologie webowe. Stale rozwijam
          wachlarz umiejętności poprzez nowe wyzwania oraz kursy.
        </p>
      </div>

      <div className="skills">
        <div className="all-skills">
          <div className="skill-container">
            <img className="skill-image" src={javascript} alt="javascript" />
            <p className="skill-text">javascript</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src={html5} alt="html" />
            <p className="skill-text">html 5</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src={css3} alt="css" />
            <p className="skill-text">css 3</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src={angular} alt="angular" />
            <p className="skill-text">angular 2</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src={reactjs} alt="react" />
            <p className="skill-text">react js</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src={firebase} alt="firebase" />
            <p className="skill-text">firebase</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src={sass} alt="sass" />
            <p className="skill-text">sass</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src={es6} alt="es6" />
            <p className="skill-text">es6</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src={bootstrap} alt="bootstrap" />
            <p className="skill-text">bootstrap</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src={wordpress} alt="wordpress" />
            <p className="skill-text">wordpress</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src={photoshop} alt="photoshop" />
            <p className="skill-text">photoshop</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src={figma} alt="figma" />
            <p className="skill-text">figma</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
