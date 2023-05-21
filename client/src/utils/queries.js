import { gql } from "@apollo/client";

// i just added these queries so the profile page could render. they're not the actualy queries we need to use

export const QUERY_USER = gql`
  mutation getUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
    }
  }
`;

export const QUERY_ME = gql`
  mutation getUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
    }
  }
`;
