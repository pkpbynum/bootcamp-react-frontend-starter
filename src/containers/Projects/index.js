import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Project from "../../components/Project";

class Projects extends Component {
  render() {
    return (
      <React.fragment>
        <div>
          <Navbar />
        </div>
        <div>
          <Project />
        </div>
      </React.fragment>
    );
  }
}

export default Projects;
