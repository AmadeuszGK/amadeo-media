import React from "react";
import MenuDesktop from "../components/MenuDesktop"
import About from "../components/About"

class AboutUs extends React.Component {
    render() {
        return(
            <div>
                <div className="header-small">
                   <MenuDesktop />
                </div>
                <div>about us</div>
            </div>
        ) 
    }
}

export default AboutUs;