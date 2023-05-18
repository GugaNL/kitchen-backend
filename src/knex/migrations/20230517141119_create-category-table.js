exports.up = async function (knex) {
  return knex.schema.createTable('category', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTable('category');
};
