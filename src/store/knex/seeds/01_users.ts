import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, username: ' Jean-Luc-Picard' },
    { id: 2, username: 'William-Riker' },
    { id: 3, username: 'lieutenant-commander-Data' },
  ])
}
