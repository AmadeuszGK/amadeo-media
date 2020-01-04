import React from "react";
// import Loader from 'react-loader-spinner'
import Header from "../components/Header/Header";
import AboutHome from "../components/Home/AboutHome/AboutHome";
import ClientsHome from "../components/Home/ClientsHome/ClientsHome";
// import Offer from "../components/Offer";
// import Skills from "../components/Skills";
import ContactHome from "../components/Home/ContactHome/ContactHome";
import Footer from "../components/Footer/Footer";
import MenuMobile from "../components/Menu/MenuMobile/MenuMobile";
import OfferHome from "../components/Home/OfferHome/OfferHome";
//import "../layout.css";
import "../styles/main.scss";
import logo from "../images/agrzesiak-logo.png"
import loader from "../images/loader.svg"
import "animate.css/animate.min.css";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');

//   const script = document.createElement("script");
//   script.src = "/delaunay.js";
//   script.async = true;
//   document.body.appendChild(script);

//   const script1 = document.createElement("script");
//   script1.src = "/require.js";
//   script1.async = true; 
//   document.body.appendChild(script1);

//   const script2 = document.createElement("script");
//   script2.src = "/canvas.js";
//   script2.async = true; 
//   document.body.appendChild(script2);
}


class Home extends React.Component {

  constructor () {
    super(); 
    this.state = {
      isLoading: true,
      showMenu: false
    } 

  }
  
  toglleMenu = () => {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  }

  componentDidMount () {
    this.setState({ isLoading: false });
  }


  render () {

    return (
          <div className={this.state.showMenu ? "website-content--show-menu" : "website-content"}>
            <div className="loader-content" style={{display: this.state.isLoading ? 'flex' : 'none', backgroundImage: "url('../images/header-bg-mac-min.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" } }>
              <img src={loader} alt="arrow" height={110} width={110}/>
            </div>
            <div className="suqare-logo">
              <a href="/"><img src={logo} alt="amadeo media"></img></a>
            </div>

            <MenuMobile passedFunction={this.toglleMenu} showMenu={this.state.showMenu}/>
  
            <div className="main-content">
              <div className="main-content-button" onClick={this.toglleMenu.bind(this)}/>
  
              <Header/>
  
              <main>
                <AboutHome />
                <OfferHome />
                <ClientsHome />
                <ContactHome />
              </main>
  
              <Footer />
            </div>
          </div>
    )
  }
};


export default Home;