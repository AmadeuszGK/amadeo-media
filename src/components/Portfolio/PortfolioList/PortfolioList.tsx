import React from 'react';
import PortfolioArr from '../PortfolioArr';
import { portfolioItemTypes } from '../PortfolioWrapper';
import PortfolioItem from './PortfolioItem/PortfolioItem';

type PortfolioListProps = {
  filter: portfolioItemTypes;
}

const PortfolioList: React.FC<PortfolioListProps> = ({ filter }) => {
  return (
    <>
      {filter === 'default' && PortfolioArr.map(item => <PortfolioItem {...item} key={item.name} />)}
      {filter === 'website' && PortfolioArr.map(item => item.type === 'website' && <PortfolioItem {...item} key={item.name} />)}
      {filter === 'store' && PortfolioArr.map(item => item.type === 'shop' && <PortfolioItem {...item} key={item.name} />)}
    </>
  );
};

export default PortfolioList;
