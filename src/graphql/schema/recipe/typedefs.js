const { gql } = require('apollo-server');

const recipeTypedefs = gql`
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
    image: Image
    rating: Int
    duration: String
    ingredients: [String!]!
    prepare: String!
  }

  input RecipeInput {
    title: String!
    category: ID!
    image: ID!
    rating: Int
    duration: String
    ingredients: [String!]!
    prepare: String!
  }

  input UpdateRecipeInput {
    title: String
    category_id: ID!
    image_id: ID!
    rating: Int
    duration: String
    ingredients: [String]
    prepare: String
  }
`

module.exports = {
  recipeTypedefs
}
