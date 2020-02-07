import React from 'react';
// import Loader from 'react-loader-spinner'
import Header from '../components/Header/Header';
import ClientsHome from '../components/Home/ClientsHome/ClientsHome';
import ContactHome from '../components/Home/ContactHome/ContactHome';
import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/Menu/MenuMobile/MenuMobile';
import OfferHome from '../components/Home/OfferHome/OfferHome';
import '../styles/main.scss';
import logo from '../images/agrzesiak-logo.png';
import loader from '../images/loader.svg';
import 'animate.css/animate.min.css';
import Helmet from 'react-helmet';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

class Home extends React.Component {
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
          <title>My Title</title>
        </Helmet>
        <MenuMobile passedFunction={this.toglleMenu} showMenu={this.state.showMenu} />

        <div className="main-content">
          <div className="main-content-button" onClick={this.toglleMenu.bind(this)} />

          <Header />

          <main>
            <div className="suqare-logo">
              <a href="/">
                <img src={logo} alt="amadeo media" />
              </a>
            </div>
            <OfferHome />
            <ClientsHome />
            <ContactHome />
          </main>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
