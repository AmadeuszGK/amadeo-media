import React from 'react';
// import Loader from 'react-loader-spinner'
import Header from '../components/Header/Header';
import ClientsHome from '../components/Home/ClientsHome/ClientsHome';
import ContactHome from '../components/Home/ContactHome/ContactHome';
import Cookies from '../components/Cookies/Cookies';
import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/Menu/MenuMobile/MenuMobile';
import OfferHome from '../components/Home/OfferHome/OfferHome';
import '../styles/main.scss';
import logo from '../images/agrzesiak-logo.png';
import 'animate.css/animate.min.css';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { withTrans } from '../components/i18n/withTrans';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      cookies: true,
    };
  }

  toglleMenu = () => {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  };

  componentDidMount() {
    this.setState({ cookies: localStorage.getItem('Cookies') });
  }

  render() {
    return (
      <div className={this.state.showMenu ? 'website-content--show-menu' : 'website-content'}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Amadeo Media - strony internetowe, sklepy e-commerce, grafika</title>
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
          <html lang="pl-PL" />
        </Helmet>
        <MenuMobile passedFunction={this.toglleMenu} showMenu={this.state.showMenu} />

        <div className="main-content">
          <div className="main-content-button" onClick={this.toglleMenu.bind(this)} />

          <Header />

          <main>
            <div className="suqare-logo">
              <Link to="/">
                <img src={logo} alt="amadeo media" />
              </Link>
            </div>
            <OfferHome />
            <ClientsHome />
            <ContactHome />
          </main>

          <Footer />
          {this.state.cookies ? null : <Cookies />}
        </div>
      </div>
    );
  }
}

export default withTrans(Home);
