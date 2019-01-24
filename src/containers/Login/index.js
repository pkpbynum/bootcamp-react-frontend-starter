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
import { Mutation, withApollo } from "react-apollo";
import LOGIN from "./mutations";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={LOGIN}
        variables={{ email: this.state.email, password: this.state.password }}
      >
        {(loginUser, { data }) => (
          <Container>
            <LoginContainer>
              <Title>Welcome back!</Title>
              <Label>Username/Email</Label>
              <Input onChange={e => this.onChange("email", e)} />
              <Label>Password</Label>
              <Input
                type="password"
                onChange={e => this.onChange("password", e)}
              />
              <Button
                onClick={() => {
                  console.log(data);
                  return loginUser;
                }}
              >
                Login
              </Button>
              <Text as="a" href="/register">
                New user? Click here!
              </Text>
            </LoginContainer>
          </Container>
        )}
      </Mutation>
    );
  }
}

export default withApollo(Login);
