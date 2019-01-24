import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";
import Messages from "./components/Messages";
import { Container } from "./styles";

const ContentSelector = ({ pageName }) => {
  if (pageName === "tasks") return <Tasks />;
  return <Messages />;
};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "tasks"
    };
  }

  changePage = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <Container>
        <Sidebar changePage={this.changePage} />
        <ContentSelector pageName={this.state.currentPage} />
      </Container>
    );
  }
}

export default MainPage;
