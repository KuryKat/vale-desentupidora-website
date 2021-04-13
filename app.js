const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const lessMiddleware = require('less-middleware')
const helmet = require('helmet')

const fs = require('fs')

/*

    ROUTES IMPORT

*/
const indexRouter = require('./routes/index.js')
const servicesRouter = require('./routes/services.js')
const aboutRouter = require('./routes/about.js')
const attendanceRouter = require('./routes/attendance.js')
const contactRouter = require('./routes/contact.js')

const app = express()

const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')))
const { sobre, atendimento, faleConosco, carousels } = JSON.parse(fs.readFileSync(path.join(__dirname, 'messages.json')))
const services = JSON.parse(fs.readFileSync(path.join(__dirname, 'services.json')))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(lessMiddleware(path.join(__dirname, 'static')))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/img', express.static(path.join(__dirname, 'static', 'img')))

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      'child-src': ['www.google.com']
    }
  }
}))

/*

    ROUTES USE

*/
app.use('/', indexRouter(config, carousels, services, sobre))
app.use('/services', servicesRouter(config.number, services))
app.use('/sobre', aboutRouter(config.number, sobre))
app.use('/atendimento', attendanceRouter(config.number, atendimento))
app.use('/fale-conosco', contactRouter(config.number, faleConosco))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  if (err.status === 404) {
    return res.render('message', {
      number: config.number,
      title: '404',
      text: 'Página Não Encontrada!'
    })
  }

  // render the error page
  res.status(err.status || 500)
  res.render('error', {
    number: config.number
  })
})

module.exports = {
  app,
  config
}
