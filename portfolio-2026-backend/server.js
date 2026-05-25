import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

import path from "path";
import { fileURLToPath } from "url";

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));

// --------------------------
// pour le déploiement      |
// --------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sert les fichiers statiques du build React
app.use(express.static(path.join(__dirname, "../portfolio-2026/dist")));

// Renvoie index.html pour toutes les routes React (client-side routing)
app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "../portfolio-2026/dist", "index.html"));
});
