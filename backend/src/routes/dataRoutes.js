const express = require('express')
const router = express.Router()
const dataController = require('../controllers/dataController')

// Route pour ajouter des données
router.post('/data', dataController.createData)

// Route pour récupérer des données
router.get('/data', dataController.getData)

module.exports = router
