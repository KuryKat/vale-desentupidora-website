const nodemailer = require('nodemailer')

module.exports = async function sendMail (config, name, email, subject, text) {
  const transporter = nodemailer.createTransport(config.email)

  await transporter.sendMail({
    from: `Solicitação de Orçamento - ${name} <${email}>`,
    to: config.email.auth.user,
    subject,
    text
  })
}
