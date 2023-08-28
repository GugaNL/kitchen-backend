// import { gql } from 'apollo-server';
const { gql } = require('apollo-server')
// import { loginTypedefs } from './login/typesdefs';
const { loginTypedefs } = require('./login/typesdefs');
// import { loginResolvers } from './login/resolvers';
const { loginResolvers } = require('./login/resolvers')
// import { categoryTypedefs } from './category/typedefs';
const { categoryTypedefs } = require('./category/typedefs')
// import { categoryResolvers } from './category/resolvers';
const { categoryResolvers } = require('./category/resolvers')
// import { recipeTypedefs } from './recipe/typedefs';
const { recipeTypedefs } = require('./recipe/typedefs')
// import { recipeResolvers } from './recipe/resolvers';
const { recipeResolvers } = require('./recipe/resolvers')
// import { imageTypedefs } from './image/typesdefs';
const { imageTypedefs } = require('./image/typesdefs')
// import { apiFiltersTypedefs } from './api-filters/typedefs';
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

export const typeDefs = [rootTypeDefs, categoryTypedefs, recipeTypedefs, imageTypedefs, apiFiltersTypedefs, loginTypedefs];
export const resolvers = [rootResolvers, categoryResolvers, recipeResolvers, loginResolvers];
