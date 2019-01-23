import React from "react";
import { Container, Title, Author, Date, Content } from "./styles";
import InputButton from "./subcomponents/InputButton";
import InputBar from "./subcomponents/Input";

class DisplayBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false
    };
  }

  toggleInput = () => {
    this.setState({ showInput: !this.state.showInput });
  };
  render() {
    return (
      <Container>
        {this.state.showInput ? (
          <InputBar toggleInput={this.toggleInput} />
        ) : (
          <React.Fragment>
            <Title>{this.props.message.title}</Title>
            <Author>{this.props.message.author}</Author>
            <Date>{this.props.message.date}</Date>
            <Content>{this.props.message.content}</Content>
            <InputButton toggleInput={this.toggleInput} />
          </React.Fragment>
        )}
      </Container>
    );
  }
}

export default DisplayBox;
