import Router from 'express-promise-router'
import { Request, Response } from 'express'
import { Knex } from '../store/knex/knex'
const router = Router()

router
  .route('/users')
  .get(async (req: Request, res: Response): Promise<void> => {
    const items = await Knex('users')
    console.log(items)
    res.json(items)
  })

export default router
