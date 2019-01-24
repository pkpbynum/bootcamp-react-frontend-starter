import gql from "graphql-tag";

const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
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

export default LOGIN;
