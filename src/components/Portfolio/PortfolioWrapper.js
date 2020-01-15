import React, { Component } from 'react'
import "./PortfolioWrapper.scss"
import PortfolioList from "./PortfolioList/PortfolioList";
import PortfolioNav from "./PortfolioNav/PortfolioNav";
import SectionTop from '../../components/SectionTop/SectionTop'

const topText = <p>Przez lata stworzyliśmy wiele projektów dla klientów z najróżniejszych branż. Poniżej znajdziesz niektóre z nich. Naciśnij na obrazek, aby zobaczyć dany projekt.</p>
const bigHeader = <h2>Sprawdź<br />nasze projekty</h2>
const smallHeader = "PORTFOLIO"

export default class PortfolioWrapper extends Component {
  state = {
    filter: 'default'
  }

  setFilter = childData => {
    this.setState({ filter: childData });
  };


  render() {
    console.log(this.state.filter)
    return (
          <section className="section__portfolio" id="section__portfolio" filter={this.state.filter}>
              <SectionTop smallHeader={smallHeader} bigHeader={bigHeader} paragraph={topText}/>
               <PortfolioNav parentFilter={this.setFilter}/>
               <PortfolioList filter={this.state.filter}/>
          </section>
    )
  }
} 


