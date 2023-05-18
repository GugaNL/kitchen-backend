import { gql } from 'apollo-server';
import { categoryTypedefs } from './category/typedefs';
import { categoryResolvers } from './category/resolvers';
import { apiFiltersTypedefs } from './api-filters/typedefs';

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

export const typeDefs = [rootTypeDefs, categoryTypedefs, apiFiltersTypedefs];
export const resolvers = [rootResolvers, categoryResolvers];
