const knexFn = require('knex');
const knexfile = require('./knexfile');

export const knex = knexFn(knexfile[process.env.NODE_ENV]);


export const knexConfig = {
  client: process.env.DATABASE_CLIENT,
  connection: {
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
};
