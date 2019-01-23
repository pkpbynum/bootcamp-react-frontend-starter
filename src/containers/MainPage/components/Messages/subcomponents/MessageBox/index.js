import React from "react";
import { Container, NoMessages } from "./styles";
import Message from "./subcomponents/Message";

const messages = [
  {
    id: 1,
    title: "title1",
    content: "content1",
    author: "author1",
    createdAt: "today"
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
    author: "author2",
    createdAt: "tomorrow"
  },
  {
    id: 3,
    title: "title3",
    content: "content3",
    author: "author3",
    createdAt: "in two days"
  },
  {
    id: 4,
    title: "title4",
    content: "content4",
    author: "author4",
    createdAt: "in three days"
  }
];

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 1
    };
  }

  setActiveId = id => {
    this.setState({ activeId: id });
  };
  render() {
    return (
      <Container>
        {messages.length ? "" : <NoMessages>No Messages</NoMessages>}
        {messages.map((message, ind) => (
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
