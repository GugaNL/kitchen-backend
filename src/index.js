import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
//import { knex } from './knex';
import { CategorySQLDataSource } from './graphql/schema/category/datasources';

const knexConfig = {
  client: process.env.DATABASE_CLIENT,
  connection: {
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
};

const db = new CategorySQLDataSource(knexConfig);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ db }),
});

server.listen(4003).then(() => {
  console.log('server is running');
});
