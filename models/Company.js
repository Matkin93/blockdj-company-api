const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  details: {
    type: String
  },
  website: {
    type: String
  },
  facebook_url: {
    type: String
  },
  instagram: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
})

module.exports = mongoose.model('companies', CompanySchema);