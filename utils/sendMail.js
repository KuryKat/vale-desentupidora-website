const nodemailer = require('nodemailer')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('../config.json'))
/**
* Function to send emails
* @param {JSON} config
* @param {{name: string, email: string}} user
* @param {String} subject
* @param {String} text
* @param {"me" | "user"} from
* @param {{name: string, email: string}} me
*/
module.exports = async function sendMail (
  user,
  subject,
  text,
  from = 'me',
  me = { email: config.email.auth.user, name: 'Vale Desentupidora' }
) {
  const transporter = nodemailer.createTransport(config.email)

  console.log(user, subject, text, from, me)

  if (from === 'me') {
    await transporter.sendMail({
      from: `${me.name} <${me.email}>`,
      to: user.email,
      subject,
      text
    })
  } else if (from === 'user') {
    await transporter.sendMail({
      from: `${user.name} <${user.email}>`,
      to: me.email,
      subject: `Solicitação de Orçamento - ${subject} - ${user.email}`,
      text
    })
  } else {
    throw new Error('Invalid param "from", it must be "me" | "user"')
  }
}
