const express = require('express')
const dataRoutes = require('./routes/dataRoutes')
const app = express()
const port = process.env.PORT || 3001

// Middleware pour parser les requêtes JSON
app.use(express.json())

// Utilisation des routes
app.use('/api', dataRoutes)

// Route de base pour tester le serveur
app.get('/', (req, res) => {
  res.send('Welcome to the Express server with NeDB!')
})

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
