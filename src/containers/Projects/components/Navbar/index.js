import React, { Component } from "react";
import {
  Container,
  NavItems,
  Text,
  Input,
  SubmitButton,
  NavButton
  // ModalText,
  // ModalTopContainer,
  // ModalButton,
  // ModalContainer,
  // ModalBottomContainer,
  // ModalInput
} from "./styles";
// import ReactModal from "react-modal";
import Modal from "../Modal";
import store from "store";

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
                <Modal
                  showModal={this.state.showModal}
                  closeModal={this.handleCloseModal}
                />
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
                <Text href="/" onClick={() => store.clearAll()}>
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
