import { gql } from "apollo-server";

export const recipeTypedefs = gql`
  extend type Query {
    recipe(id: ID!): Recipe!
    recipes(input: ApiFiltersInput): [Recipe!]!
  }

  extend type Mutation {
    createRecipe(data: RecipeInput!): Recipe!
    updateRecipe(recipeId: ID!, data: UpdateRecipeInput!): Recipe!
    deleteRecipe(recipeId: ID!): Boolean!
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
  }

  input RecipeInput {
    title: String!
    category: ID!
    image: String
    rating: Int
    duration: String
    ingredients: [String!]!
    prepare: String!
  }

  input UpdateRecipeInput {
    title: String
    category_id: ID!
    image: String
    rating: Int
    duration: String
    ingredients: [String]
    prepare: String
  }
`
