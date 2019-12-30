import React from "react";
import MenuDesktop from "../components/MenuDesktop"
import MenuMobile from "../components/MenuMobile"
import Top from "../components/Top"
import Footer from "../components/Footer";
import Offer from "../components/Offer";

import "../styles/top.scss";
import "../styles/offer.scss";
import logo from "../images/agrzesiak-logo.png"
import loader from "../images/loader.svg"

class OfferAndPricing extends React.Component {

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
    
    render() {
        return(
            <div>
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

                        <div className="header-small">
                            <MenuDesktop />
                        </div>

                        <main>
                            {/* <Top /> */}
                            <Offer />
                        </main>
                            <Footer />
                    </div>
                </div>
            </div>
        ) 
    }
}

export default OfferAndPricing;