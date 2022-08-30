import knex from 'knex'
import knexfile from './knexfile'

export const Knex = knex(knexfile[process.env.NODE_ENV || 'development'])
