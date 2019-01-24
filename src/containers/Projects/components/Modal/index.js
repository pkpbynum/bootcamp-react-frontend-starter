import ReactModal from 'react-modal'
import React, { Component } from 'react'
import {
  ModalText,
  ModalTopContainer,
  ModalButton,
  ModalContainer,
  ModalBottomContainer,
  ModalInput
} from './styles'
import CREATE_PROJECT from './mutations'
import { Mutation, withApollo } from 'react-apollo'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { projectName: '' }
  }

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <ModalContainer>
        <ReactModal
          isOpen={this.props.showModal}
          contentLabel="Inline Styles Modal Example"
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              height: '20%',
              width: '40%'
            }
          }}
        >
          <ModalTopContainer>
            <ModalText>New Project</ModalText>
          </ModalTopContainer>
          <ModalBottomContainer>
            <ModalInput
              onChange={this.updateInput}
              value={this.state.projectName}
              type="text"
              placeholder="Name your project"
              name="projectName"
            />
            <Mutation
              mutation={CREATE_PROJECT}
              variables={{ name: this.state.projectName }}
              // onCompleted={data => {
              //   this.props.closeModal()
              // }}
            >
              {(addProject, { data }) => (
                <ModalButton
                  type="submit"
                  onClick={() => {
                    addProject()
                    this.props.closeModal()
                  }}
                >
                  Done
                </ModalButton>
              )}
            </Mutation>
          </ModalBottomContainer>
        </ReactModal>
      </ModalContainer>
    )
  }
}

export default withApollo(Modal)
