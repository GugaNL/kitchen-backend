const { gql } = require('apollo-server')
const { loginTypedefs } = require('./login/typesdefs');
const { loginResolvers } = require('./login/resolvers')
const { categoryTypedefs } = require('./category/typedefs')
const { categoryResolvers } = require('./category/resolvers')
const { recipeTypedefs } = require('./recipe/typedefs')
const { recipeResolvers } = require('./recipe/resolvers')
const { imageTypedefs } = require('./image/typesdefs')
const { apiFiltersTypedefs } = require('./api-filters/typedefs')

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }

  type Mutation {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
  Mutation: {
    _empty: () => true,
  },
};

const typeDefs = [rootTypeDefs, categoryTypedefs, recipeTypedefs, imageTypedefs, apiFiltersTypedefs, loginTypedefs];
const resolvers = [rootResolvers, categoryResolvers, recipeResolvers, loginResolvers];

module.exports = {
  typeDefs, resolvers
}
