import React, {Component} from "react";
import vars from "./vars.json";

class Header extends Component{
    render(){
        return(
            <header>
                <h1>{vars.campaignTitle}</h1>
                <h4>Dramatis Personae</h4>
            </header>
        );
    }
}

export default Header;