const knexFn = require('knex');
const knexfile = require('./knexfile');

const knex = knexFn(knexfile[process.env.NODE_ENV]);


const knexConfig = {
  client: process.env.DATABASE_CLIENT,
  connection: {
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
};

module.exports = {
  knex, knexConfig
}
