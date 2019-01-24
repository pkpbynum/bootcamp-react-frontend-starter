import React, { Component } from "react";
import {
  Container,
  RegisterContainer,
  Input,
  Title,
  Label,
  Button,
  Text
} from "./styles";
class Register extends Component {
  render() {
    return (
      <Container>
        <RegisterContainer>
          <Title>Welcome!</Title>
          <Label>Username/Email</Label>
          <Input />
          <Label>Password</Label>
          <Input type="password" />
          <Label>Confirm password</Label>
          <Input type="password" />
          <Button>Sign Up</Button>
          <Text as="a" href="/login">
            Already have an account? Click here!
          </Text>
        </RegisterContainer>
      </Container>
    );
  }
}

export default Register;
