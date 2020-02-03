import React, { Component } from 'react';
import './PortfolioNav.scss';
import ScrollAnimation from 'react-animate-on-scroll';

class PortfolioNav extends Component {
  filter = 'default';

  handleFilter = newFilter => {
    this.props.parentFilter(newFilter);
  };

  sortByDefault = () => {
    this.filter !== 'default' && (this.filter = 'default');
    this.handleFilter(this.filter);
  };

  sortByWebsite = () => {
    this.filter !== 'website' ? (this.filter = 'website') : (this.filter = 'default');
    this.handleFilter(this.filter);
  };

  sortByStore = () => {
    this.filter !== 'store' ? (this.filter = 'store') : (this.filter = 'default');
    this.handleFilter(this.filter);
  };

  render() {
    return (
      <ScrollAnimation
        className="portfolio__nav"
        animateIn="slideInRight"
        delay={100}
        animateOnce={true}
      >
        <button
          className={this.filter === 'default' ? 'portfolio__button--active' : 'portfolio__button'}
          onClick={this.sortByDefault}
        >
          WSZYSTKO
        </button>
        <button
          className={this.filter === 'website' ? 'portfolio__button--active' : 'portfolio__button'}
          onClick={this.sortByWebsite}
        >
          STRONY WWW
        </button>
        <button
          className={this.filter === 'store' ? 'portfolio__button--active' : 'portfolio__button'}
          onClick={this.sortByStore}
        >
          SKLEPY
        </button>
      </ScrollAnimation>
    );
  }
}

export default PortfolioNav;
