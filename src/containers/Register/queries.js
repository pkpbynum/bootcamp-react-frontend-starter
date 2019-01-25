import gql from "graphql-tag";

const CREATE_USER = gql`
  mutation($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        firstName
        lastName
        id
      }
      token
      error {
        message
      }
    }
  }
`;

export default CREATE_USER;
