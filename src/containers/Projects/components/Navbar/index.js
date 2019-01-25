import React, { Component } from 'react'
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
} from './styles'
// import ReactModal from "react-modal";
import Modal from '../Modal'
import store from 'store'
import JOIN_PROJECT from './mutations'
import { Mutation, withApollo } from 'react-apollo'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false, id: store.get('user').id, projectCode: '' }
  }
  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

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
                    name="projectCode"
                    onChange={this.updateInput}
                    value={this.state.projectCode}
                  />
                  <Mutation
                    mutation={JOIN_PROJECT}
                    variables={{ code: this.state.projectCode }}
                    // onCompleted={data => {
                    //   this.props.closeModal()
                    // }}
                  >
                    {(addProject, { data }) => (
                      <SubmitButton
                        type="submit"
                        onClick={() => {
                          addProject()
                        }}
                      >
                        Join
                      </SubmitButton>
                    )}
                  </Mutation>
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
    )
  }
}

export default withApollo(Navbar)
