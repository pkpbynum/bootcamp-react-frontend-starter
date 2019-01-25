import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";
import Messages from "./components/Messages";
import { Container } from "./styles";
import { Query, withApollo } from "react-apollo";
import { MESSAGES, TASKS } from "./queries";
import store from "store";

const ContentSelector = ({ pageName }) => {
  if (pageName === "tasks")
    return (
      <Query
        query={TASKS}
        variables={{
          projectId: store.get("project").id
        }}
      >
        {({ loading, error, data }) => {
          console.log(store.get("project").members);
          if (loading) return null;
          if (error) return `Error!: ${error}`;
          return (
            <Tasks members={store.get("project").members} tasks={data.tasks} />
          );
        }}
      </Query>
    );

  return (
    <Query
      query={MESSAGES}
      variables={{
        projectId: store.get("project")
      }}
    >
      {({ loading, error, data }) => {
        console.log(store.get("project").members);
        if (loading) return null;
        if (error) return `Error!: ${error}`;
        return (
          <Messages
            messages={data.messages}
            members={store.get("project").members}
          />
        );
      }}
    </Query>
  );
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

export default withApollo(MainPage);
