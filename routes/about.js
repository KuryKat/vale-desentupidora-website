const express = require('express')
const router = express.Router()

module.exports = ({ title, text, image, hasButton, button }) => {
  router.get('/', (_, res) => {
    res.render('info', {
      title: 'Sobre',
      message: {
        title,
        text,
        image,
        hasButton,
        button
      }
    })
  })
  return router
}
