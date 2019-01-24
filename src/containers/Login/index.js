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
import LOGIN_USER from "./queries";
import { Mutation, withApollo } from "react-apollo";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
        <LoginContainer>
          <Title>Welcome back!</Title>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            onChange={this.updateInput}
            value={this.state.email}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            onChange={this.updateInput}
            value={this.state.password}
          />
          <Mutation
            mutation={LOGIN_USER}
            variables={{
              email: this.state.email,
              password: this.state.password
            }}
          >
            {(login, { data }) => {
              return (
                <Button
                  onClick={() => {
                    login();
                  }}
                >
                  Login
                </Button>
              );
            }}
          </Mutation>
          <Text href="/register">New user? Click here!</Text>
        </LoginContainer>
      </Container>
    );
  }
}

export default withApollo(Login);
