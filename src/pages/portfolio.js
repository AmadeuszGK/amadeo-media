import React from "react";
import MenuDesktop from "../components/Menu/MenuDesktop/MenuDesktop";
import MenuMobile from "../components/Menu/MenuMobile/MenuMobile";
import Footer from "../components/Footer/Footer";
import PortfolioWrapper from "../components/Portfolio/PortfolioWrapper";
import logo from "../images/agrzesiak-logo.png";
import loader from "../images/loader.svg";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      showMenu: false
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
      <div
        className={
          this.state.showMenu ? "website-content--show-menu" : "website-content"
        }
      >
        <div
          className="loader-content"
          style={{
            display: this.state.isLoading ? "flex" : "none",
            backgroundImage: "url('../images/header-bg-mac-min.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
          }}
        >
          <img src={loader} alt="arrow" height={110} width={110} />
        </div>
        <div className="suqare-logo">
          <a href="/">
            <img src={logo} alt="amadeo media" />
          </a>
        </div>

        <MenuMobile
          passedFunction={this.toglleMenu}
          showMenu={this.state.showMenu}
        />

        <div className="main-content">
          <div
            className="main-content-button"
            onClick={this.toglleMenu.bind(this)}
          />

          <div className="header-small">
            <MenuDesktop />
          </div>

          <main>
            <PortfolioWrapper />
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Portfolio;
