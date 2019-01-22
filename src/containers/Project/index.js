import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import { Container } from "./styles";

class Project extends Component {
  render() {
    return (
      <Container>
        <Sidebar />
      </Container>
    );
  }
}

export default Project;
