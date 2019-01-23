import React from "react";
import { TitleInput, ContentInput, Button } from "./styles";

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <TitleInput
          type="text"
          name="title"
          placeholder="Title"
          onChange={this.inputChange}
        />
        <ContentInput
          name="content"
          placeholder="Content"
          onChange={this.inputChange}
        />
        <Button
          onClick={() => {
            console.log("send message!");
            this.props.toggleInput();
          }}
        >
          Send
        </Button>
      </React.Fragment>
    );
  }
}

export default InputBar;
