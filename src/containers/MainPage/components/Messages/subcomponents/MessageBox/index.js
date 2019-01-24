import React from "react";
import { Container, NoMessages } from "./styles";
import Message from "./subcomponents/Message";

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 1
    };
  }

  componentDidMount() {
    const { id, title, content, author, createdAt } = this.props.messages[0];
    this.setState({ activeId: id });
    this.props.setDisplay({ title, content, author, createdAt });
  }

  setActiveId = id => {
    this.setState({ activeId: id });
  };

  render() {
    return (
      <Container>
        {this.props.messages.length ? "" : <NoMessages>No Messages</NoMessages>}
        {this.props.messages.map((message, ind) => (
          <Message
            key={ind}
            message={message}
            activeId={this.state.activeId}
            setActiveId={this.setActiveId}
            setDisplay={this.props.setDisplay}
          />
        ))}
      </Container>
    );
  }
}

export default MessageBox;
