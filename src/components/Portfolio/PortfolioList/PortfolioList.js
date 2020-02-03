import React, { Component } from 'react';
import PortfolioArr from '../PortfolioArr';
import PortfolioItem from './PortfolioItem/PortfolioItem';

class PortfolioList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.filter === 'default') {
      return PortfolioArr.map(item => <PortfolioItem {...item} key={item.name} />);
    } else if (this.props.filter === 'website') {
      return PortfolioArr.map(
        item => item.type === 'website' && <PortfolioItem {...item} key={item.name} />,
      );
    } else if (this.props.filter === 'store') {
      return PortfolioArr.map(
        item => item.type === 'shop' && <PortfolioItem {...item} key={item.name} />,
      );
    }
  }
}

export default PortfolioList;
