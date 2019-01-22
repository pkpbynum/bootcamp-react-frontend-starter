import React, { Component } from "react";
import {
  Container,
  NavItems,
  Text,
  Input,
  SubmitButton,
  NavButton
} from "./styles";
import ReactModal from "react-modal";
class Navbar extends Component {
  constructor() {
    super();
    this.state = { showModal: false };
  }
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <nav>
        <ul>
          <Container>
            <NavItems>
              <li>
                <NavButton onClick={this.handleOpenModal}>
                  Create Group
                </NavButton>
                <ReactModal
                  isOpen={this.state.showModal}
                  contentLabel="Inline Styles Modal Example"
                  style={{
                    // overlay: {
                    //   backgroundColor: "papayawhip"
                    // },
                    content: {
                      // color: "lightsteelblue"
                    }
                  }}
                >
                  <p>Modal text!</p>
                  <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
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
