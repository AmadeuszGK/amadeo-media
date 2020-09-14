import React from 'react';
import styles from './SectionTop.module.scss';

export const SectionTop = ({ smallHeader, bigHeader, paragraph, colorWhite }) => {
  return (
    <div className={styles.top__about} style={{ color: colorWhite && '#fff' }}>
      <div className={styles.top__header}>
        <div className="flat-line" />
        <h2 style={{ color: colorWhite && '#fff' }}>{smallHeader}</h2>
      </div>

      {bigHeader}

      {paragraph}
    </div>
  );
};

export default SectionTop;
