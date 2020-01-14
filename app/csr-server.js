const app = require('./app-koa')
const config = require('../config/server.config')

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'production'
}
const isProd = process.env.NODE_ENV === 'production'

const host = process.env.HOST || (isProd ? config.build.host : config.dev.host) || 'localhost'
const port = process.env.PORT || (isProd ? config.build.port : config.dev.port) || 3000
app.listen(port, host, () => {
  console.log(`server started at localhost:${port}`)
}).on('listening', () => console.log('serve is running'))
  .on('error', err => console.log(err))
