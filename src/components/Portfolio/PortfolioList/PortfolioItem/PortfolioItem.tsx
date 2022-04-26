import React from 'react';

type PortfolioItemProps = {
  img: string;
  link: string;
  name: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ img, link, name }) => (
  <div className="mix prt-card inter">
    <div className="prt-image">
      <img src={img} alt={name} />
      <div className="prt-overlay">
        <span className="prt-icon zoom-icon">
          <i className="uil uil-search-plus"></i>
        </span>
        <a href={link} className="prt-icon">
          <i className="uil uil-link-h"></i>
        </a>
      </div>
    </div>
    <div className="prt-desc">
      <h3>{name}</h3>
    </div>
  </div>
);

export default PortfolioItem;
