const path = require('path')
const Datastore = require('nedb')
const electron = require('electron')

let db = null

function initializeDB() {
  if (db) return db

  const app = electron.app || electron.remote.app
  const userDataPath = app.getPath('userData')

  db = new Datastore({
    filename: path.join(userDataPath, 'database.db'),
    autoload: true,
  })

  db.loadDatabase((err) => {
    if (err) {
      console.error(
        'Erreur lors du chargement de la base de données NeDB :',
        err
      )
    }
  })

  return db
}

function getDB() {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDB first.')
  }
  return db
}

module.exports = {
  initializeDB,
  getDB,
}
