const dataModel = require('../models/dataModel')

// Contrôleur pour insérer des données
function createData(req, res) {
  const data = req.body
  dataModel.insertData(data, (err, newDoc) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to insert data' })
    }
    res.status(200).json(newDoc)
  })
}

// Contrôleur pour récupérer toutes les données
function getData(req, res) {
  dataModel.getAllData((err, docs) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve data' })
    }
    res.status(200).json(docs)
  })
}

module.exports = {
  createData,
  getData,
}
