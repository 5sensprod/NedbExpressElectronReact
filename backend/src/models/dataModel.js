const { getDB } = require('../config/database')

// Fonction pour insérer des données dans la base de données
function insertData(data, callback) {
  const db = getDB()
  db.insert(data, (err, newDoc) => {
    if (err) {
      console.error("Erreur lors de l'insertion des données :", err)
      return callback(err)
    }
    console.log('Données insérées :', newDoc)
    callback(null, newDoc)
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
    console.log('Données récupérées :', docs)
    callback(null, docs)
  })
}

module.exports = {
  insertData,
  getAllData,
}
