import React, { Component } from 'react'
import {
  Container,
  RegisterContainer,
  Input,
  Title,
  Label,
  Button,
  Text
} from './styles'

import CREATE_USER from './queries'
import { Mutation, withApollo } from 'react-apollo'
import store from 'store'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phone: ''
    }
  }

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  goToProjects = data => {
    if (data.createUser.token) {
      store.set('user', {
        id: data.createUser.user.id,
        firstName: data.createUser.user.firstName,
        lastName: data.createUser.user.lastName,
        token: data.createUser.token
      })
      this.props.history.push('/projects')
    }
  }

  render() {
    return (
      <Container>
        <RegisterContainer>
          <Title>Welcome!</Title>
          <Label>First Name</Label>
          <Input
            type="text"
            name="firstname"
            onChange={this.updateInput}
            value={this.state.firstname}
          />
          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastname"
            onChange={this.updateInput}
            value={this.state.lastname}
          />
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            onChange={this.updateInput}
            value={this.state.email}
          />
          <Label>Phone Number</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.updateInput}
            value={this.state.phone}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            onChange={this.updateInput}
            value={this.state.password}
          />
          <Mutation
            mutation={CREATE_USER}
            variables={{
              input: {
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone
              }
            }}
            onCompleted={data => {
              this.goToProjects(data)
            }}
          >
            {(addUser, { data }) => {
              return <Button onClick={addUser}>Sign Up</Button>
            }}
          </Mutation>
          <Text href="/">Already have an account? Click here!</Text>
        </RegisterContainer>
      </Container>
    )
  }
}

export default withApollo(Register)
