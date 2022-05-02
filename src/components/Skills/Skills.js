import React from 'react';
import './Skills.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Skills = () => (
  <div className="all-skills">
    <div className="skill-container">
      <StaticImage
        src="../../images/javascript.png"
        alt="javascript"
        width={60}
        placeholder="blurred"
        layout="constrained"
        className="skill-image"
      />
    </div>
    <div className="skill-container">
      <StaticImage
        src="../../images/html5.png"
        alt="html"
        width={60}
        placeholder="blurred"
        layout="constrained"
        className="skill-image"
      />
    </div>
    <div className="skill-container">
      <StaticImage
        src="../../images/css3.png"
        alt="css"
        width={60}
        placeholder="blurred"
        layout="constrained"
        className="skill-image"
      />
    </div>
    <div className="skill-container">
      <StaticImage
        src="../../images/styled-components.png"
        alt="styled components"
        width={60}
        placeholder="blurred"
        layout="constrained"
        className="skill-image"
      />
    </div>
    <div className="skill-container">
      <StaticImage
        src="../../images/reactjs.png"
        alt="react js"
        width={60}
        placeholder="blurred"
        layout="constrained"
        className="skill-image"
      />
    </div>
    <div className="skill-container">
      <StaticImage
        src="../../images/typescript.png"
        alt="typescript"
        width={60}
        placeholder="blurred"
        layout="constrained"
        className="skill-image"
      />
    </div>
    <div className="skill-container">
      <StaticImage
        src="../../images/graphql.png"
        alt="graphql"
        width={60}
        placeholder="blurred"
        layout="constrained"
        className="skill-image"
      />
    </div>
    <div className="skill-container">
      <StaticImage
        src="../../images/sass.png"
        alt="sass"
        width={60}
        placeholder="blurred"
        layout="constrained"
        className="skill-image"
      />
    </div>
    <div className="skill-container">
      <StaticImage
        src="../../images/gatsbyjs.png"
        alt="gatsby js"
        width={60}
        placeholder="blurred"
        layout="constrained"
        className="skill-image"
      />
    </div>
    <div className="skill-container">
      <StaticImage
        src="../../images/wordpress.png"
        alt="wordpress"
        width={60}
        placeholder="blurred"
        layout="constrained"
        className="skill-image"
      />
    </div>
    <div className="skill-container">
      <StaticImage
        src="../../images/photoshop.png"
        alt="photoshop"
        width={60}
        placeholder="blurred"
        layout="constrained"
        className="skill-image"
      />
    </div>
    <div className="skill-container">
      <StaticImage
        src="../../images/figma.png"
        alt="figma"
        width={60}
        placeholder="blurred"
        layout="constrained"
        className="skill-image"
      />
    </div>
  </div>
);

export default Skills;
