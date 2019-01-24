import gql from 'graphql-tag'

const CREATE_PROJECT = gql`
  mutation($name: String!) {
    createProject(name: $name) {
      project {
        id
      }
      error {
        message
      }
    }
  }
`

export default CREATE_PROJECT
