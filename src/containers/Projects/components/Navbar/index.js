import React, { Component } from "react";
import {
  Container,
  NavItems,
  Text,
  Input,
  SubmitButton,
  NavButton
} from "./styles";
class Navbar extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <nav>
        <ul>
          <Container>
            <NavItems>
              <li>
                <NavButton onClick={this.showModal}>Create Group</NavButton>
              </li>
            </NavItems>
            <NavItems>
              <li>
                <form>
                  <Input
                    type="text"
                    placeholder="Enter a project code"
                    name="code"
                  />
                  <SubmitButton type="submit">Join</SubmitButton>
                </form>
              </li>
            </NavItems>
            <NavItems>
              <li>
                <Text as="a" href="https://www.google.com/">
                  Logout
                </Text>
              </li>
            </NavItems>
          </Container>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
