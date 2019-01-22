import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";
import Messages from "./components/Messages";
import Meetings from "./components/Meetings";
import { Container } from "./styles";

const ContentSelector = ({ pageName }) => {
  if (pageName === "tasks") return <Tasks />;
  if (pageName === "messages") return <Messages />;
  return <Meetings />;
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

  renderContent() {
    if (this.state.currentPage === "tasks") {
      return <Tasks />;
    } else if (this.state.currentPage === "messages") {
      return <Messages />;
    } else {
      return <Meetings />;
    }
  }
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
