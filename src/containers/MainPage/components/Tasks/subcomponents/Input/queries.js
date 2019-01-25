import gql from "graphql-tag";

export const CREATE_TASK = gql`
  mutation($content: String!, $deadline: String!, $userId: String!) {
    createTask(content: $content, deadline: $deadline, userId: $userId) {
      task {
        id
      }
    }
  }
`;
