import gql from "graphql-tag";

export const MESSAGES = gql`
  query($projectId: ID!) {
    messages(projectId: $projectId) {
      content
      userId
      createdAt
      title
    }
  }
`;

export const TASKS = gql`
  query($projectId: ID!) {
    tasks(projectId: $projectId) {
      content
      userId
      deadline
      status
    }
  }
`;
