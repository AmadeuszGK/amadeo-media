import React from 'react';
import './PortfolioItem.scss';

const PortfolioItem = ({ img, link, name }) => (
  <div className="portfolio__item">
    <a href={link} className="portfolio__img">
      <img src={img} alt={name} />
    </a>
    <a href={link} className="portfolio__itemHover">
      <p>{name}</p>
    </a>
  </div>
);

export default PortfolioItem;
