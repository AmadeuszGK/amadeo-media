import React, { Component } from 'react'
import "./PortfolioNav.scss";


class PortfolioNav extends Component {
  filter = 'default';
  
  handleFilter = newFilter => {
    this.props.parentFilter(newFilter);
  };
  
  sortByDefault = () => {
    this.filter !== 'default' && (this.filter = 'default');
    this.handleFilter(this.filter);
  }
  
  sortByWebsite = () => {
    this.filter !== 'website' ? (this.filter = 'website') : (this.filter = 'default');
    this.handleFilter(this.filter);
  }
  
  sortByStore = () => {
    this.filter !== 'store' ? (this.filter = 'store') : (this.filter = 'default');
    this.handleFilter(this.filter);
  }

  render() {
    return (
      <div className="portfolio__nav">
        <button className={this.filter === 'default' ? "portfolio__button--active" : "portfolio__button"} onClick={this.sortByDefault}>WSZYSTKO</button>
        <button className={this.filter === 'website' ? "portfolio__button--active" : "portfolio__button"} onClick={this.sortByWebsite}>STRONY INTERNETOWE</button>
        <button className={this.filter === 'store' ? "portfolio__button--active" : "portfolio__button"} onClick={this.sortByStore}>SKLEPY INTERNETOWE</button>
      </div>
    )
  }


}

export default PortfolioNav;