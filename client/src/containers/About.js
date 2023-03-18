import React, { Component } from "react";
import Navbar from "../components/Navbar";
import StaticComponent from "../components/StaticComponent";

class About extends Component {
    render() {
        return (
            <>
                <Navbar menubuttons={false} />
                <StaticComponent type='about' />
            </>
        );
    }
}

export default About;
