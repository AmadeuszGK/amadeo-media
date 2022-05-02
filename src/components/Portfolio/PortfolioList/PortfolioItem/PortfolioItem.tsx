import React from 'react';

type PortfolioItemProps = {
  img: string;
  link: string;
  name: string;
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({ img, link, name }) => (
  <a className="mix prt-card inter" href={link}>
    <div className="prt-image">
      <img src={img} alt={name} />
      <div className="prt-overlay">
        <div className="prt-icon">
          <i className="uil uil-link"></i>
        </div>
      </div>
    </div>
    <div className="prt-desc">
      <h3>{name}</h3>
    </div>
  </a>
);

export default PortfolioItem;
