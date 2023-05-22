import { gql } from 'apollo-server-core';

export const loginTypedefs = gql`
  extend type Mutation {
    register(data: LoginInput): Login!
    login(data: LoginInput!): LoginReturn!
    logout(email: String!): Boolean!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Login {
    id: ID!
    email: String
    password: String
    token: String
  }

  type LoginReturn {
    userId: String!
    email: String!
    token: String!
  }
`;
