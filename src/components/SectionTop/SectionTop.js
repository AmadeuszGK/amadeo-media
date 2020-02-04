import React from 'react';
import styles from './SectionTop.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';

export const SectionTop = ({ smallHeader, bigHeader, paragraph, colorWhite }) => {
  return (
    <ScrollAnimation
      className={styles.top__about}
      animateIn="slideInLeft"
      delay={50}
      animateOnce={true}
      style={{ color: colorWhite && '#fff' }}
    >
      <div className={styles.top__header}>
        <div className="flat-line" />
        <p style={{ color: colorWhite && '#fff' }}>{smallHeader}</p>
      </div>

      {bigHeader}

      {paragraph}
    </ScrollAnimation>
  );
};

export default SectionTop;
