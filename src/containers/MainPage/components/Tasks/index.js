import React from "react";
import { Container, Title } from "./styles";
import TasksDropdown from "./subcomponents/TasksDropdown";
import AllTasks from "./subcomponents/AllTasks";

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
        <AllTasks />
      </Container>
    );
  }
}

export default Tasks;
