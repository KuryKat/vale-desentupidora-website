const express = require('express')
const router = express.Router()

module.exports = ({ title, text, image }) => {
  router.get('/', (_, res) => {
    res.render('info', {
      title: 'Sobre',
      message: {
        title,
        text,
        image
      }
    })
  })
  return router
}
