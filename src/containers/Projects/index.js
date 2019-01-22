import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Project />
      </React.Fragment>
    );
  }
}

export default Projects;
