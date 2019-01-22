import React from "react";
import { Container } from "./styles";
import Message from "./subcomponents/Message";

class MessageBox extends React.Component {
  render() {
    return (
      <Container>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </Container>
    );
  }
}

export default MessageBox;
