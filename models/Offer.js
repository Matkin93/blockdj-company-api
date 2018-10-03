const mongoose = require('mongoose');
const { Schema } = mongoose;

const OfferSchema = new Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'companies',
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  redemption: {
    type: String
  },
  image_url: {
    type: String
  },
  areas: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref:'areas'
  }],
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  },
  expires_at: {
    type: Date
  }
})

module.exports = mongoose.model('offers', OfferSchema);