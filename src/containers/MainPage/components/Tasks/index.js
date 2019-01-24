import React from "react";
import { Container, Title } from "./styles";
import TasksDropdown from "./subcomponents/TasksDropdown";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterId: "0"
    };
  }

  setFilterId = id => {
    this.setState({ filterId: id });
  };

  render() {
    return (
      <Container>
        <Title>Tasks</Title>
        <TasksDropdown
          filtered={this.state.filterId}
          setFilterId={this.setFilterId}
        />
      </Container>
    );
  }
}

export default Tasks;
