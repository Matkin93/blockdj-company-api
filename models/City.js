const mongoose = require('mongoose')
const { Schema } = mongoose

const CitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }  
});

module.exports = mongoose.model('cities', CitySchema);