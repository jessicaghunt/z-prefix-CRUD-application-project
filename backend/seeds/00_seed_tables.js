/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Insert users
  await knex('users').del();
  await knex('users').insert([
    {
    id: 1,
    firstname: 'john',
    lastname: 'smith',
    username: 'jsmith',
    password: 'test'
  },
  {
    id: 2,
    firstname: 'jane',
    lastname: 'doe',
    username: 'jdoe',
    password: 'test'
  }
  ]);

  // Insert asset
  await knex('item').del();
  await knex('item').insert([
    {
      id: 1,
      userid: 1,
      itemname: 'boots',
      description: 'Snakeskin boots',
      quantity: 57
    },
    {
      id: 2,
      userid: 1,
      itemname: 'belt',
      description: 'Saddleback leather belt',
      quantity: 12
    },
    {
      id: 3,
      userid: 1,
      itemname: 'hat',
      description: '10-gallon hat',
      quantity: 1
    }
  ]);
};