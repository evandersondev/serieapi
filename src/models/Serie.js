const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const SerieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  season: {
    type: Number,
    require: true
  },
  episode: {
    type: Number,
    require: true
  },
}, {
    timestamps: true
  })

SerieSchema.plugin(mongoosePaginate)

mongoose.model('Serie', SerieSchema)