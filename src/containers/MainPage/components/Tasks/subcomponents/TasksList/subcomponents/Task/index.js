import React from "react";
import { Container, Content, Item } from "./styles";
import StatusBox from "./subcomponents/StatusBox";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.task.status
    };
  }

  render() {
    return (
      <Container>
        <Content>{this.props.task.content}</Content>
        <Item>{this.props.task.userId}</Item>
        <Item>{this.props.task.deadline}</Item>
        <Item>
          <StatusBox status={this.props.task.status} />
        </Item>
      </Container>
    );
  }
}

export default Task;
