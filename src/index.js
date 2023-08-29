const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./graphql/schema');
const { context } = require('./graphql/context');
const { LoginSQLDataSource } = require('./graphql/schema/login/datasources');
const { CategorySQLDataSource } = require('./graphql/schema/category/datasources')
const { RecipeSQLDataSource } = require('./graphql/schema/recipe/datasources')
const { ImageSQLDataSource } = require('./graphql/schema/image/datasources')
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
