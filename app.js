const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')

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

const config = JSON.parse(fs.readFileSync('./config.json'))
const { sobre, atendimento, faleConosco, carousels } = JSON.parse(fs.readFileSync('./messages.json'))
const services = JSON.parse(fs.readFileSync('./services.json'))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'static')))

/*

    ROUTES USE

*/
app.use('/', indexRouter(carousels, services, sobre))
app.use('/services', servicesRouter(services))
app.use('/sobre', aboutRouter(sobre))
app.use('/atendimento', attendanceRouter(atendimento))
app.use('/fale-conosco', contactRouter(faleConosco))

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
      title: '404',
      text: 'Página Não Encontrada!'
    })
  }

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = {
  app,
  config
}
