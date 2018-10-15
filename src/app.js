import Koa from 'koa'
import http from 'http'
import { logger } from './utils/logger'
import { PORT, NODE_ENV } from './utils/constants'

logger.info('Creating app instance')

const app = new Koa()

app.use(async () => logger.info(`Handling request from ${process.pid}`))

logger.info('Koa application created!')

const server = http.createServer(app.callback())

server.on('close', () => {
  logger.info('Server closing, bye!')
})

logger.info('Server created, ready to listen', { scope: 'startup' })

app.listen(PORT, () => {
  logger.info(
    `Server listening on ${PORT} in ${NODE_ENV} mode  PID: ${process.pid}`
  )
})
