const { getDB } = require('../config/database')

// Fonction pour insérer des données dans la base de données
function insertData(data, callback) {
  const db = getDB()
  db.insert(data, (err, newDoc) => {
    if (err) {
      console.error("Erreur lors de l'insertion des données :", err)
      return callback(err)
    }
    callback(null, newDoc) // Ne plus afficher les données insérées
  })
}

// Fonction pour récupérer toutes les données depuis la base de données
function getAllData(callback) {
  const db = getDB()
  db.find({}, (err, docs) => {
    if (err) {
      console.error('Erreur lors de la récupération des données :', err)
      return callback(err)
    }
    callback(null, docs) // Ne plus afficher les données récupérées
  })
}

module.exports = {
  insertData,
  getAllData,
}
