const express = require('express')
const router = express.Router()

module.exports = (carousels, services, { title, text, image }) => {
  router.get('/', async (_, res) => {
    res.render('index', {
      carousels,
      services,
      message: {
        title,
        text,
        image
      }
    })
  })

  return router
}
