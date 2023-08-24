import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
import { context } from './graphql/context';
import { LoginSQLDataSource } from './graphql/schema/login/datasources';
import { CategorySQLDataSource } from './graphql/schema/category/datasources';
import { RecipeSQLDataSource } from './graphql/schema/recipe/datasources';
import { ImageSQLDataSource } from './graphql/schema/image/datasources';
import { knexConfig } from './knex';

const dbCategory = new CategorySQLDataSource(knexConfig);
const dbRecipe = new RecipeSQLDataSource(knexConfig);
const dbImage = new ImageSQLDataSource(knexConfig);
const dbLogin = new LoginSQLDataSource(knexConfig);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => ({ dbCategory, dbRecipe, dbLogin, dbImage }),
});

server.listen(4003).then(() => {
  console.log('server is running');
});
