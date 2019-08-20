const express = require('express')
const routes = express.Router()
const SerieController = require('./controllers/SerieController')

routes.get('/serie', SerieController.index)
routes.get('/serie/:id', SerieController.show)
routes.post('/serie', SerieController.store)
routes.put('/serie/:id', SerieController.update)
routes.delete('/serie/:id', SerieController.destroy)

module.exports = routes
