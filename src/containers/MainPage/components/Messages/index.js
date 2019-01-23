import React from "react";
import DisplayBox from "./subcomponents/DisplayBox";
import MessageBox from "./subcomponents/MessageBox";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: {
        title: "title",
        author: "author",
        date: "date",
        content: "content"
      }
    };
  }

  setDisplay = ({ title, author, date, content }) => {
    this.setState({ currentMessage: { title, date, author, content } });
  };

  render() {
    return (
      <React.Fragment>
        <MessageBox setDisplay={this.setDisplay} />
        <DisplayBox message={this.state.currentMessage} />
      </React.Fragment>
    );
  }
}

export default Messages;
