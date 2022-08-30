import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from './config/default.config'
import * as router from './routes/index.routes'
import {
  expressErrorHandler,
  express404Handler,
} from './middleware/express.middleware'

const app = express()

app.use(router.userRoutes)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(helmet())
app.use(expressErrorHandler)
app.use(express404Handler)

export const server = app.listen(config.server.port)

server
  .on('listening', () => console.log('running at %s', config.serverString))
  .on('error', (error) => console.log(error))
