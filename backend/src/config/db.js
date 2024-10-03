const Datastore = require('nedb')
const path = require('path')

// Initialisation de NeDB, fichier stocké dans backend/data/
const db = new Datastore({
  filename: path.join(__dirname, '../../data/database.db'),
  autoload: true,
})

module.exports = db
