import gql from "graphql-tag";

const MESSAGES = gql`
  query($projectId: ID!) {
    messages(projectId: $projectId) {
      content
      userId
      createdAt
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