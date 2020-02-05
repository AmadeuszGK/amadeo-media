import React from 'react';
import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/Menu/MenuMobile/MenuMobile';
import '../styles/main.scss';
import logo from '../images/agrzesiak-logo.png';
import MenuDesktop from '../components/Menu/MenuDesktop/MenuDesktop';

class POST extends React.Component {
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
        <MenuMobile passedFunction={this.toglleMenu} showMenu={this.state.showMenu} />

        <div className="main-content">
          <div className="main-content-button" onClick={this.toglleMenu.bind(this)} />
          <div className="suqare-logo">
            <a href="/">
              <img src={logo} alt="amadeo media" />
            </a>
          </div>

          <div className="header-small">
            <MenuDesktop />
          </div>
          <main>
            <div className="POST" />
          </main>

          <Footer />
        </div>
      </div>
    );
  }
}

export default POST;
