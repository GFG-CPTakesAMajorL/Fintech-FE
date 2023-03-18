import React, { Component } from "react";
import Navbar from "../components/Navbar";
import FileUpload from "./FileUpload";
import Templates from "../components/Templates";

class MyTemplates extends Component {
    render() {
        return (
            <div className="Home">
                <Navbar menubuttons={false} />
                <FileUpload description={true} templateUpload={true} />
                <Templates />
            </div>
        );
    }
}

export default MyTemplates;
