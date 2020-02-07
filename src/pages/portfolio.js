import React from 'react';
import Helmet from 'react-helmet';
import MenuDesktop from '../components/Menu/MenuDesktop/MenuDesktop';
import MenuMobile from '../components/Menu/MenuMobile/MenuMobile';
import Footer from '../components/Footer/Footer';
import PortfolioWrapper from '../components/Portfolio/PortfolioWrapper';
import logo from '../images/agrzesiak-logo.png';
import loader from '../images/loader.svg';

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      showMenu: false,
    };
  }

  toglleMenu = () => {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className={this.state.showMenu ? 'website-content--show-menu' : 'website-content'}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio - Amadeo Media</title>
          <meta
            name="keywords"
            content="strony internetowe,sklepy internetowe,front end developer,wrocław,lubań,e-commerce,grafika,tanio, tanie, grafik"
          />
          <meta name="author" content="Amadeusz Grzesiak" />
          <meta
            name="description"
            content="Zajmujemy się tworzeniem stron internetowych, sklepów (e-commerce), grafiką i nie tylko,
            sprawdź naszą ofertę! Stwórzmy coś razem."
          />
        </Helmet>
        <div className="suqare-logo">
          <a href="/">
            <img src={logo} alt="amadeo media" />
          </a>
        </div>

        <MenuMobile passedFunction={this.toglleMenu} showMenu={this.state.showMenu} />

        <div className="main-content">
          <div className="main-content-button" onClick={this.toglleMenu.bind(this)} />

          <div className="header-small">
            <MenuDesktop />
          </div>

          <main>
            <h1 className="h1">portfolio</h1>
            <PortfolioWrapper />
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Portfolio;
