//----------serve scr----------
//it is for pro or dev mode
//----------serve scr----------
//tasks:
//
//include some lib
const Koa = require('koa')
const fs = require('fs')
const path = require('path')

//include some config
const config = require('../config/server.config')
const resolve = file => path.resolve(__dirname, file)

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'production'
}
const isProd = process.env.NODE_ENV === 'production'

const app = new Koa()
// for static serve in public path
app.use(require('koa-static')((isProd ? config.build.static : config.dev.static)))
// for static web serve in dist path
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
