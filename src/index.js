// import { ApolloServer } from 'apollo-server';
const { ApolloServer } = require('apollo-server');
// import { typeDefs, resolvers } from './graphql/schema';
const { typeDefs, resolvers } = require('./graphql/schema');
// import { context } from './graphql/context';
const { context } = require('./graphql/context');
// import { LoginSQLDataSource } from './graphql/schema/login/datasources';
const { LoginSQLDataSource } = require('./graphql/schema/login/datasources');
// import { CategorySQLDataSource } from './graphql/schema/category/datasources';
const { CategorySQLDataSource } = require('./graphql/schema/category/datasources')
// import { RecipeSQLDataSource } from './graphql/schema/recipe/datasources';
const { RecipeSQLDataSource } = require('./graphql/schema/recipe/datasources')
// import { ImageSQLDataSource } from './graphql/schema/image/datasources';
const { ImageSQLDataSource } = require('./graphql/schema/image/datasources')
// import { knexConfig } from './knex';
const { knexConfig } = require('./knex')

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

server.listen(process.env.PORT).then(() => {
  console.log('server is running');
});
