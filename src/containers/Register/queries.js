import gql from "graphql-tag";

const CREATE_USER = gql`
  mutation($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
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
