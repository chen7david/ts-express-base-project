import type { Knex } from 'knex'
import { join } from 'path'
import { config as dbConfig } from '../../config/default.config'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: join(__dirname, 'store.sqlite3'),
    },
    useNullAsDefault: true,
  },

  production: {
    client: dbConfig.db.client,
    connection: {
      database: dbConfig.db.name,
      user: dbConfig.db.user,
      password: dbConfig.db.pass,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}

export default config
