exports.up = async function(knex) {
  return knex.schema.createTable('recipe', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('image');
    table.integer('rating');
    table.string('duration');
    table.text('ingredients');
    table.text('prepare');
    table.integer('category_id').unsigned();
    table.foreign('category_id').references('category.id');
  })
};

exports.down = async function(knex) {
  return knex.schema.dropTable('recipe');
};
