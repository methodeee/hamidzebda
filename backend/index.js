import express from 'express'
import dotenv from 'dotenv'
import classementRoutes from './routes/classement.js'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/classement', classementRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`)
})
