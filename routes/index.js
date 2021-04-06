const express = require('express')
const sendMail = require('../utils/sendMail.js')
const validateEmail = require('../utils/validateEmail.js')
const router = express.Router()

module.exports = (config, carousels, services, { title, text, image }) => {
  router.get('/', async (_, res) => {
    res.render('index', {
      number: config.number,
      carousels,
      services,
      message: {
        title,
        text,
        image
      }
    })
  })

  router.get('/dev', (_, res) => {
    res.render('dev')
  })

  router.post('/', async (req, res, next) => {
    const { name, email, subject, text } = req.body

    const validEmail = validateEmail(email)

    if (validEmail) {
      try {
        await sendMail({ name, email }, subject, text, 'user')
        res.render('message', {
          number: config.number,
          title: 'Orçamento Solicitado!',
          text: 'Seu orçamento foi solicitado com sucesso, aguarde que iremos entrar em contato por email com você.'
        })
        await sendMail({ name, email }, `Recebemos Seu Orçamento ${name}`, `Olá, recebemos seu orçamento de "${subject}"\nEm breve iremos lhe enviar um email com o orçamento completo!\n\nSe quiser um contato mais veloz pode nos contatar pelo WhatsApp ou ligando para: ${config.number.formated}!\nAgradecemos o contato!\n\n~ Vale Desentupidora`)
      } catch (error) {
        next(error)
      }
    } else {
      res.render('message', {
        number: config.number,
        title: 'Erro',
        text: 'Email Inválido.'
      })
    }
  })

  return router
}
