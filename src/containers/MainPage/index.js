import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";
import Messages from "./components/Messages";
import { Container } from "./styles";
import { Query, withApollo } from "react-apollo";

const ContentSelector = ({ pageName }) => {
  if (pageName === "tasks") return <Tasks members={members} tasks={tasks} />;
  return <Messages messages={messages} members={members} />;
};

const members = [
  { id: "1", firstName: "Peter", lastName: "last1" },
  { id: "2", firstName: "Ben", lastName: "last2" },
  { id: "3", firstName: "Carolyn", lastName: "last3" },
  { id: "4", firstName: "Zuzanna", lastName: "last4" }
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

const messages = [
  {
    id: 1,
    title: "title1",
    content: "content1",
    author: "author1",
    createdAt: "today"
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
    author: "author2",
    createdAt: "tomorrow"
  },
  {
    id: 3,
    title: "title3",
    content: "content3",
    author: "author3",
    createdAt: "in two days"
  },
  {
    id: 4,
    title: "title4",
    content: "content4",
    author: "author4",
    createdAt: "in three days"
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
