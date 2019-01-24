import gql from "graphql-tag";

<<<<<<< HEAD
const GET_PROJECT = gql``;

export default GET_PROJECT;
=======
const MESSAGES = gql`
  query($projectId: ID!) {
    messages(projectId: $projectId) {
      content
      userId
      createdAt
      title
    }
  }
`;

export default TASKS = gql`
   query($projectId: ID!) {
    tasks(projectId: $projectId) {
      content
      userId
      deadline
      status
    }
  }
`;

export default MESSAGES;
>>>>>>> dc48e0cdd62c7eafe326623cc9e2ccce4f8d12f6
