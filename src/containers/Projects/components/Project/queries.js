import gql from "graphql-tag";

const PROJECTS = gql`
  query($userId: ID!) {
    projects(userId: $userId) {
      id
      name
      code
      members {
        id
        firstName
        lastName
      }
    }
  }
`;

export default PROJECTS;
