const knexFn = require('knex');
const knexfile = require('./knexfile');

export const knex = knexFn(knexfile[process.env.NODE_ENV]);
