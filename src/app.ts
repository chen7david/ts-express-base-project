import { config } from './config/default.config'
import { Knex } from './store/knex/knex'
console.log('Hello TS World!')

const run = async () => {
  const items = await Knex('users')
  console.log(items)
}

run()
