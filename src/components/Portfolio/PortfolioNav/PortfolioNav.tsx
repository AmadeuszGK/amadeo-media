import React from 'react';
import { portfolioItemTypes } from '../PortfolioWrapper';

type PortfolioNavProps = {
  filter: portfolioItemTypes;
  setFilter: (filter: portfolioItemTypes) => void;
}

export const PortfolioNav:React.FC<PortfolioNavProps> = ({ filter, setFilter }) => {
  return (
    <div className="filter-btns">
      {console.log('filter', filter)}
      <button
        className={filter === 'default' ? 'filter-btn mixitup-control-active' : 'filter-btn'}
        onClick={() => setFilter('default')}
      >
        WSZYSTKO
      </button>
      <button
        className={filter === 'website' ? 'filter-btn mixitup-control-active' : 'filter-btn'}
        onClick={() => setFilter('website')}
      >
        STRONY WWW
      </button>
      <button
        className={filter === 'store' ? 'filter-btn mixitup-control-active' : 'filter-btn'}
        onClick={() => setFilter('store')}
      >
        SKLEPY
      </button>
    </div>
  );
};

export default PortfolioNav;
