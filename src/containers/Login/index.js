import React, { Component } from "react";
import {
  Container,
  LoginContainer,
  Input,
  Title,
  Label,
  Button,
  Text
} from "./styles";
class Login extends Component {
  render() {
    return (
      <Container>
        <LoginContainer>
          <Title>Welcome back!</Title>
          <Label>Username/Email</Label>
          <Input />
          <Label>Password</Label>
          <Input type="password" />
          <Button>Login</Button>
          <Text as="a" href="google.com">
            New User? Click Here!
          </Text>
        </LoginContainer>
      </Container>
    );
  }
}

export default Login;
