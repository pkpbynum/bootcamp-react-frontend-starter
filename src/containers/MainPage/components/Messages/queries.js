import gql from "graphql-tag";

const MESSAGES_QUERY = gql`
  query($projectId: ID!) {
    messages(projectId: $projectId) {
      id
      userId
      content
      createdAt
    }
  }
`;

export default MESSAGES_QUERY;
