//----------serve scr----------
//it is for pro or dev mode
//----------serve scr----------
//tasks:
//
//include some lib
const Koa = require('koa')
const favicon = require('koa-favicon')
const compression = require('koa-compress')
const logger = require('koa-logger')
const fs = require('fs')
const path = require('path')

//include some config
const config = require('../config/server.config')
const rootPath = path.resolve(__dirname, '../')
const resolve = file => path.resolve(rootPath, file)

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'production'
}
const isProd = process.env.NODE_ENV === 'production'


const app = new Koa()
// log serve
app.use(logger())
// zlib serve
app.use(compression({
  // checks the response content type to decide whether to compress
  // filter: function (content_type) {return /text/i.test(content_type)},
  // set minimum response size in bytes to compress
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}))
app.use(favicon(isProd ? `${config.build.public}/favicon.ico` : `${config.dev.public}/favicon.ico`, {
  // set favicon cache max-age in milliseconds.
  maxAge: isProd ? 1 * 1000 * 60 * 60 * 60 * 24 : 1000
  // 1*1000*60*60*60*24
  // n*ms*s*m*h*d*
}))

// for static serve in public path eg,img,ico,...
app.use(require('koa-static')((isProd ? config.build.public : config.dev.public)))
// for static web serve in dist path
app.use(require('koa-static')((isProd ? config.build.www : config.dev.www)))

app.use(async (ctx, next) => {
  try {
    ctx.body = fs.readFileSync((isProd ? config.build.index : config.dev.index), 'utf-8')
    ctx.set('Content-Type', 'text/html')
    ctx.set('Server', 'Koa2 client side render')
  } catch (e) {
    next()
  }
})
//for other


module.exports = app
