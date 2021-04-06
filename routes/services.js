const express = require('express')
const findService = require('../utils/findService')
const router = express.Router()

/**
 * @param {[{name: String, url: String, description: String, image: String | undefined}]} services
 */
module.exports = (number, services) => {
  router.get('/', async (_, res) => {
    res.render('services', {
      title: 'Serviços',
      services,
      number
    })
  })

  router.get('/:serviceName', (req, res, next) => {
    const { serviceName } = req.params

    const result = findService(services, serviceName)

    if (result.found) {
      return res.render('info', {
        number,
        title: 'Serviço: ' + result.foundService.name,
        message: {
          title: result.foundService.name,
          text: result.foundService.description,
          image: {
            url: result.foundService.image,
            alt: 'Imagem Ilustrativa de ' + result.foundService.name
          },
          hasButton: true,
          button: {
            link: 'https://api.whatsapp.com/send?phone=5512997553884&text=Olá eu gostaria de falar sobre ' + result.foundService.name,
            text: 'Mais informações',
            hasSideIcon: true,
            icon: {
              name: 'whatsapp',
              type: 'fab'
            }
          }
        }
      })
    }
    next()
  })

  router.get('/desentupimento/:type', (req, res, next) => {
    const { type } = req.params

    const result = findService(services, type)

    if (result.found) {
      return res.render('info', {
        number,
        title: 'Serviço: ' + result.foundService.name,
        message: {
          title: result.foundService.name,
          text: result.foundService.description,
          image: {
            url: result.foundService.image,
            alt: 'Imagem Ilustrativa de ' + result.foundService.name
          },
          hasButton: true,
          button: {
            link: 'https://api.whatsapp.com/send?phone=5512997553884&text=Olá eu gostaria de falar sobre ' + result.foundService.name,
            text: 'Mais informações',
            hasSideIcon: true,
            icon: {
              name: 'whatsapp',
              type: 'fab'
            }
          }
        }
      })
    }
    next()
  })

  return router
}
