const express = require('express')
const router = express.Router()

module.exports = (number, { title, text, image, hasButton, button }) => {
  router.get('/', (_, res) => {
    res.render('info', {
      title: 'Atendimento',
      message: {
        title,
        text,
        image,
        hasButton,
        button
      },
      number
    })
  })
  return router
}
