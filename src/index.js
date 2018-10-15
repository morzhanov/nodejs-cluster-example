import '@babel/polyfill'
import cluster from 'cluster'
import os from 'os'
import { logger } from './utils/logger'

if (cluster.isMaster) {
  const cpus = os.cpus().length
  logger.info(`Clustering to ${cpus} CPUs`)
  cpus.forEach(() => cluster.fork())
} else {
  require('./app')
}
