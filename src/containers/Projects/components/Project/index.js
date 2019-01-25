import React, { Component } from "react";
import { Card, Title, Members, Button, Container } from "./styles";
import PROJECTS from "./queries";
import { Query, withApollo } from "react-apollo";
import store from "store";
import { withRouter } from "react-router-dom";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: store.get("user").id
    };
  }

  openProject = async (id, members, code) => {
    await store.set("project", { id, members, code });
    this.props.history.push("/project");
  };

  render() {
    return (
      <Query
        query={PROJECTS}
        variables={{
          userId: this.state.id
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;

          const cards = data.projects.map((project, ind) => (
            <Card key={ind}>
              <Title>{project.name}</Title>
              <Members>{project.members.firstName}</Members>
              <Button
                onClick={() =>
                  this.openProject(project.id, project.members, project.code)
                }
              >
                View
              </Button>
            </Card>
          ));

          return <Container>{cards}</Container>;
        }}
      </Query>
    );
  }
}
export default withRouter(withApollo(Project));
