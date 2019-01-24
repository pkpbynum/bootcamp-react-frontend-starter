import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";
import Messages from "./components/Messages";
import { Container } from "./styles";
import { Query, withApollo } from "react-apollo";

const ContentSelector = ({ pageName }) => {
  if (pageName === "tasks") return <Tasks members={members} tasks={tasks} />;
  return <Messages members={members} />;
};

const members = [
  { id: "1", firstName: "Peter", lastName: "last1" },
  { id: "2", firstName: "Ben", lastName: "last2" },
  { id: "3", firstName: "Carolyn", lastName: "last3" },
  { id: "4", firstName: "Zuzanna", lastName: "last4" },
  { id: "0", firstName: "All Tasks", lastName: "" }
];

const tasks = [
  {
    id: "0",
    userId: "1",
    status: false,
    deadline: "2011-02-27",
    content: "Task1"
  },
  {
    id: "1",
    userId: "2",
    status: false,
    deadline: "1999-05-27",
    content: "Task2"
  },
  {
    id: "2",
    userId: "3",
    status: false,
    deadline: "1997-12-27",
    content: "Task3"
  },
  {
    id: "3",
    userId: "4",
    status: false,
    deadline: "2006-06-14",
    content: "Task4"
  }
];

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

export default withApollo(MainPage);
