import gql from 'graphql-tag'

const JOIN_PROJECT = gql`
  mutation($code: ID!) {
    joinProject(code: $code) {
      request {
        id
        userId
        projectId
      }
      error {
        message
      }
    }
  }
`

export default JOIN_PROJECT
