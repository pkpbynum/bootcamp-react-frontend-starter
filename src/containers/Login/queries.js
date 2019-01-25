import gql from "graphql-tag";

const LOGIN_USER = gql`
  mutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
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

export default LOGIN_USER;
