import React from "react";
import { Container, Title } from "./styles";
import TasksDropdown from "./subcomponents/TasksDropdown";
import TasksList from "./subcomponents/TasksList";
import InputButton from "../InputButton";
import InputBar from "./subcomponents/Input";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterId: "0",
      showInput: false
    };
  }

  toggleInput = () => {
    this.setState({ showInput: !this.state.showInput });
  };

  setFilterId = async id => {
    await this.setState({ filterId: id });
  };

  render() {
    return (
      <Container>
        {this.state.showInput ? (
          <InputBar
            members={this.props.members}
            toggleInput={this.toggleInput}
          />
        ) : (
          <React.Fragment>
            <Title>Tasks</Title>
            <TasksDropdown
              members={this.props.members}
              filtered={this.state.filterId}
              setFilterId={this.setFilterId}
            />
            <TasksList
              tasks={this.props.tasks.filter(task => {
                if (this.state.filterId === "0") return true;
                return task.userId === this.state.filterId;
              })}
            />
            <InputButton toggleInput={this.toggleInput} />
          </React.Fragment>
        )}
      </Container>
    );
  }
}

export default Tasks;
