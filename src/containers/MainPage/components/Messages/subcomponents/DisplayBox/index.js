import React from "react";
import { Container, Title, Author, Date, Content } from "./styles";

class Messages extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.message.title}</Title>
        <Author>{this.props.message.author}</Author>
        <Date>{this.props.message.date}</Date>
        <Content>{this.props.message.content}</Content>
      </Container>
    );
  }
}

export default Messages;
