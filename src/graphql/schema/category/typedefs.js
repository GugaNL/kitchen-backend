import { gql } from "apollo-server";

export const categoryTypedefs = gql`
  extend type Query {
    category(id: ID!): Category
    categories(input: ApiFiltersInput): [Category!]!
  }

  extend type Mutation {
    createCategory(data: CategoryInput!): Category!
    updateCategory(categoryId: ID!, data: CategoryInput!): Category!
    deleteCategory(categoryId: ID!): Boolean!
  }

  type Category {
    id: ID!
    title: String
  }

  input CategoryInput {
    title: String!
  }
`
