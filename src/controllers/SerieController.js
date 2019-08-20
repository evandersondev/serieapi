const mongoose = require('mongoose')
const Serie = mongoose.model('Serie')

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query
    const serie = await Serie.paginate({}, { page, limit: 10 })

    return res.json(serie)
  },

  async show(req, res) {
    const serie = await Serie.findById(req.params.id)

    return res.json(serie)
  },

  async store(req, res) {
    const serie = await Serie.create(req.body)

    return res.json(serie)
  },

  async update(req, res) {
    const serie = await Serie.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(serie)
  },

  async destroy(req, res) {
    await Serie.findByIdAndRemove(req.params.id)

    return res.send()
  }
}