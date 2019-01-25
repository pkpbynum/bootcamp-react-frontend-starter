import React from "react";
import { Deadline, ContentInput, Button } from "./styles";
import { Mutation } from "react-apollo";
import { CREATE_TASK } from "./queries";
import store from "store";

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "",
      content: "",
      userId: ""
    };
  }
  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state[e.target.name]);
  };
  render() {
    const memberOptions = this.props.members.map((member, ind) => (
      <option onChange={this.inputChange} key={ind} value={member.id}>{`${
        member.firstName
      } ${member.lastName}`}</option>
    ));

    return (
      <React.Fragment>
        <Deadline
          type="text"
          name="deadline"
          placeholder="Deadline"
          onChange={this.inputChange}
        />
        <select onChange={this.inputChange} name="userId">
          {memberOptions}
        </select>
        <ContentInput
          name="content"
          placeholder="Task"
          onChange={this.inputChange}
        />
        <Mutation
          mutation={CREATE_TASK}
          variables={{
            content: this.state.email,
            deadline: this.state.deadline,
            userId: this.state.userId
          }}
          onCompleted={data => {
            this.props.toggleInput();
          }}
        >
          {(createTask, { data }) => {
            return (
              <Button
                onClick={() => {
                  createTask();
                }}
              >
                Create Task
              </Button>
            );
          }}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default InputBar;
