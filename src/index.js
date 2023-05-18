import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
import { CategorySQLDataSource } from './graphql/schema/category/datasources';
import { RecipeSQLDataSource } from './graphql/schema/recipe/datasources';
import { knexConfig } from './knex';

const dbCategory = new CategorySQLDataSource(knexConfig);
const dbRecipes = new RecipeSQLDataSource(knexConfig);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ dbCategory, dbRecipes }),
});

server.listen(4003).then(() => {
  console.log('server is running');
});
