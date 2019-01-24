import React from "react";
import { Deadline, ContentInput, Button } from "./styles";

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      userId: "",
      phone: ""
    };
  }
  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const memberOptions = this.props.members.map((member, ind) => (
      <option key={ind} value={member.id}>{`${member.firstName} ${
        member.lastName
      }`}</option>
    ));

    return (
      <React.Fragment>
        <Deadline
          type="text"
          name="title"
          placeholder="Deadline"
          onChange={this.inputChange}
        />
        <select name="userId">{memberOptions}</select>
        <ContentInput
          name="content"
          placeholder="Task"
          onChange={this.inputChange}
        />
        <Button
          onClick={() => {
            this.props.toggleInput();
          }}
        >
          Create Task
        </Button>
      </React.Fragment>
    );
  }
}

export default InputBar;
