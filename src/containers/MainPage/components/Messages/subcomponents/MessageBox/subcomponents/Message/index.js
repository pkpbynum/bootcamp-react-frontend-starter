import React from "react";
import { Container, Title, Date, Content } from "./styles";

class Message extends React.Component {
  render() {
    return (
      <Container>
        <Title type="title">Title</Title>
        <Date type="date">Date</Date>
        <Content>Message content</Content>
      </Container>
    );
  }
}

export default Message;
