import { gql } from "apollo-server";

export const recipeTypedefs = gql`
  extend type Query {
    recipe(id: ID!): Recipe!
    recipes(input: ApiFiltersInput): [Recipe!]!
  }


  type Recipe {
    id: ID!
    title: String!
    category: Category
    image: String
    rating: Int
    duration: String
    ingredients: [String!]!
    prepare: String!
    createdAt: String!
  }
`
