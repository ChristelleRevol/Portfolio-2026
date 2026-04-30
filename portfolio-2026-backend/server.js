import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/contact', async (req, res) => {

  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message de ${name}`,
    text: message
  })

  res.status(200).json({ success: true })
})

app.listen(5000, () => console.log('Serveur démarré sur le port 5000'))
