import React, { Component } from "react";
import {
  Container,
  LoginContainer,
  Input,
  Title,
  Label,
  Button,
  Text,
  IncPass
} from "./styles";
import LOGIN_USER from "./queries";
import { Mutation, withApollo } from "react-apollo";
import store from "store";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      incorrectPass: false
    };
  }

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  goToProjects = data => {
    if (data.loginUser.token) {
      store.set("user", {
        id: data.loginUser.user.id,
        token: data.loginUser.user.token
      });
      this.props.history.push("/projects");
    } else {
      this.setState({ incorrectPass: true });
    }
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
          {this.state.incorrectPass && (
            <IncPass>Incorrect Email/Password</IncPass>
          )}
          <Mutation
            mutation={LOGIN_USER}
            variables={{
              email: this.state.email,
              password: this.state.password
            }}
            onCompleted={data => {
              this.goToProjects(data);
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
