const cors = require('cors')
const express = require('express')
const dataRoutes = require('./routes/dataRoutes')

const createExpressApp = () => {
  const app = express()

  // Activer CORS pour permettre les requêtes depuis React
  app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

  // Middleware pour parser les requêtes JSON
  app.use(express.json())

  // Utilisation des routes
  app.use('/api', dataRoutes)

  // Route de base
  app.get('/', (req, res) => {
    res.send('Welcome to the Express server with NeDB!')
  })

  return app
}

module.exports = createExpressApp
