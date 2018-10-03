const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanyPlaylistSchema = new Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'companies',
    required: true
  },
  name: {
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

module.exports = mongoose.model('company_playlists', CompanyPlaylistSchema);