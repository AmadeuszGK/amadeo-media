import React, { useState } from 'react';
import PortfolioList from './PortfolioList/PortfolioList';
import PortfolioNav from './PortfolioNav/PortfolioNav';

export type portfolioItemTypes = 'default' | 'website' | 'store';

export const PortfolioWrapper = () => {
  const [filter, setFilter] = useState<portfolioItemTypes>('default');

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div className="portfolio-title">
            <h3 className="sub-heading">Ostatnie projkekty</h3>
            <h2 className="heading">Portfolio</h2>
          </div>
          <PortfolioNav filter={filter} setFilter={setFilter} />
        </div>
        <div className="portfolio-gallery">
          <PortfolioList filter={filter} />
        </div>
      </div>
    </section>
  );
};
