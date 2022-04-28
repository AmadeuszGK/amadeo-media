import React from 'react';
import './Skills.scss';

import javascript from '../../images/javascript.png';
import html5 from '../../images/html5.png';
import css3 from '../../images/css3.png';
import styledcomponents from '../../images/styled-components.png';
import reactjs from '../../images/reactjs.png';
import graphql from '../../images/graphql.png';
import sass from '../../images/sass.png';
import gatsbyjs from '../../images/gatsbyjs.svg';
import typescript from '../../images/typescript.png';
import wordpress from '../../images/wordpress.png';
import photoshop from '../../images/photoshop.png';
import figma from '../../images/figma.png';

const Skills = () => (
  <div className="all-skills">
    <div className="skill-container">
      <img className="skill-image" src={javascript} alt="javascript" />
      {/* <p className="skill-text">javascript</p> */}
    </div>
    <div className="skill-container">
      <img className="skill-image" src={html5} alt="html" />
      {/* <p className="skill-text">html 5</p> */}
    </div>
    <div className="skill-container">
      <img className="skill-image" src={css3} alt="css" />
      {/* <p className="skill-text">css 3</p> */}
    </div>
    <div className="skill-container">
      <img className="skill-image" src={styledcomponents} alt="styled components" />
      {/* <p className="skill-text">styled components</p> */}
    </div>
    <div className="skill-container">
      <img className="skill-image" src={reactjs} alt="react" />
      {/* <p className="skill-text">react js</p> */}
    </div>
    <div className="skill-container">
      <img className="skill-image" src={typescript} alt="typescript" />
      {/* <p className="skill-text">typescript</p> */}
    </div>
    <div className="skill-container">
      <img className="skill-image" src={graphql} alt="graphql" />
      {/* <p className="skill-text">graphql</p> */}
    </div>
    <div className="skill-container">
      <img className="skill-image" src={sass} alt="sass" />
      {/* <p className="skill-text">sass</p> */}
    </div>
    <div className="skill-container">
      <img className="skill-image" src={gatsbyjs} alt="gatsbyjs" />
      {/* <p className="skill-text">gatsby js</p> */}
    </div>
    <div className="skill-container">
      <img className="skill-image" src={wordpress} alt="wordpress" />
      {/* <p className="skill-text">wordpress</p> */}
    </div>
    <div className="skill-container">
      <img className="skill-image" src={photoshop} alt="photoshop" />
      {/* <p className="skill-text">photoshop</p> */}
    </div>
    <div className="skill-container">
      <img className="skill-image" src={figma} alt="figma" />
      {/* <p className="skill-text">figma</p> */}
    </div>
  </div>
);

export default Skills;
