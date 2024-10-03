const db = require('../config/db')

// Insérer une nouvelle donnée
function insertData(data, callback) {
  db.insert(data, (err, newDoc) => {
    if (err) {
      callback(err)
    } else {
      callback(null, newDoc)
    }
  })
}

// Récupérer toutes les données
function getAllData(callback) {
  db.find({}, (err, docs) => {
    if (err) {
      callback(err)
    } else {
      callback(null, docs)
    }
  })
}

module.exports = {
  insertData,
  getAllData,
}
