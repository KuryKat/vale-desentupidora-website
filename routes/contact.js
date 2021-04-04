const express = require('express')
const router = express.Router()

module.exports = ({ title, text, image, hasButton, button }) => {
  router.get('/', (_, res) => {
    res.render('reach-us', {
      title: 'Fale Conosco',
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
