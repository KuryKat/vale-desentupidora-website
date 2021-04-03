const express = require('express')
const router = express.Router()

/**
 * @param {[{name: String, url: String, description: String, image: String | undefined}]} services
 */
module.exports = (services) => {
  router.get('/', async (_, res) => {
    res.render('services', {
      title: 'Serviços',
      services
    })
  })

  router.get('/:service', (req, res, next) => {
    const { serviceName } = req.params
    if (serviceName === 'desentupimento') {
      next()
    }

    services.forEach((service) => {
      if (service.name === serviceName) {
        res.render('info', {})
      }
    })
  })

  router.get('/desentupimento/:tipo', (req, res) => {
    // const { tipo } = req.params

    // services.forEach();
    res.render('info', {})
  })

  return router
}
