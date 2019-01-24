import ReactModal from "react-modal";
import React, { Component } from "react";
import {
  ModalText,
  ModalTopContainer,
  ModalButton,
  ModalContainer,
  ModalBottomContainer,
  ModalInput
} from "./styles";

class Modal extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <ModalContainer>
        <ReactModal
          isOpen={this.props.showModal}
          contentLabel="Inline Styles Modal Example"
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              height: "20%",
              width: "40%"
            }
          }}
        >
          <ModalTopContainer>
            <ModalText>New Project</ModalText>
          </ModalTopContainer>
          <ModalBottomContainer>
            <ModalInput
              type="text"
              placeholder="Name your project"
              name="projectName"
            />
            <ModalButton type="submit" onClick={() => this.props.closeModal()}>
              Done
            </ModalButton>
          </ModalBottomContainer>
        </ReactModal>
      </ModalContainer>
    );
  }
}

export default Modal;
