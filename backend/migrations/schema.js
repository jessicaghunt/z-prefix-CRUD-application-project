/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('firstname').notNullable();
      table.string('lastname').notNullable();
      table.string('username').notNullable();
      table.string('password').nullable();
    })
    .createTable('item', (table) => {
      table.increments('id').primary();
      table.integer('userid').notNullable();
      table.string('itemname').notNullable();
      table.string('description').notNullable();
      table.integer('quantity').nullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('item');
};