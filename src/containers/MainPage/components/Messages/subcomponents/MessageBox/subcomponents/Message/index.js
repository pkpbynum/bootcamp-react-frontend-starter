import React from "react";
import { Container, Title, Author, Date, Content } from "./styles";

class Message extends React.Component {
  render() {
    return (
      <Container
        active={this.props.message.id === this.props.activeId ? 1 : 0}
        onClick={() => {
          this.props.setDisplay({
            title: this.props.message.title,
            date: this.props.message.createdAt,
            author: this.props.message.author,
            content: this.props.message.content
          });
          this.props.setActiveId(this.props.message.id);
        }}
      >
        <Title>{this.props.message.title}</Title>
        <Author>{this.props.message.author}</Author>
        <Date>{this.props.message.createdAt}</Date>
        <Content>{this.props.message.content}</Content>
      </Container>
    );
  }
}

export default Message;
