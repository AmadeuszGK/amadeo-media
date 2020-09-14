import React, { Component } from 'react';
import './PortfolioWrapper.scss';
import PortfolioList from './PortfolioList/PortfolioList';
import PortfolioNav from './PortfolioNav/PortfolioNav';
import SectionTop from '../../components/SectionTop/SectionTop';

const topText = (
  <p>
    Przez lata stworzyłem wiele projektów dla klientów z najróżniejszych branż oraz pracując dla
    firmy Promatic - jednego z liderów branży gamblingowej w Polsce. Poniżej znajdziesz niektóre z
    nich. Naciśnij na obrazek, aby zobaczyć dany projekt. Czerwone przyciski pozwolą Ci posortować
    moje prace w zależności od typu.
  </p>
);
const bigHeader = (
  <h2>
    Sprawdź
    <br />
    moje projekty
  </h2>
);
const smallHeader = 'PORTFOLIO';

export default class PortfolioWrapper extends Component {
  state = {
    filter: 'default',
  };

  setFilter = childData => {
    this.setState({ filter: childData });
  };

  render() {
    return (
      <section className="section__portfolio" id="section__portfolio" filter={this.state.filter}>
        <SectionTop smallHeader={smallHeader} bigHeader={bigHeader} paragraph={topText} />
        <PortfolioNav parentFilter={this.setFilter} />
        <div className="portfolio__list">
          <PortfolioList filter={this.state.filter} />
        </div>
      </section>
    );
  }
}
