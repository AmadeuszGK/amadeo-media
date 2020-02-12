import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './PortfolioWrapper.scss';
import PortfolioList from './PortfolioList/PortfolioList';
import PortfolioNav from './PortfolioNav/PortfolioNav';
import SectionTop from '../../components/SectionTop/SectionTop';

const topText = (
  <p>
    Przez lata stworzyliśmy wiele projektów dla klientów z najróżniejszych branż. Poniżej znajdziesz
    niektóre z nich. Naciśnij na obrazek, aby zobaczyć dany projekt.
  </p>
);
const bigHeader = (
  <h2>
    Sprawdź
    <br />
    nasze projekty
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
        <ScrollAnimation
          animateIn="slideInRight"
          offset={0}
          delay={100}
          animateOnce={true}
          className="portfolio__list"
        >
          <PortfolioList filter={this.state.filter} />
        </ScrollAnimation>
      </section>
    );
  }
}
