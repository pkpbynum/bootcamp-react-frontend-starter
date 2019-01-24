import gql from 'graphql-tag'

const PROJECTS = gql`
  query($userId: ID!) {
    projects(userId: $userId) {
      id
      name
      members {
        id
        firstName
      }
    }
  }
`

export default PROJECTS
