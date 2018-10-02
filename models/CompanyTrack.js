const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanyTrackSchema = new Schema({
  playlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company-playlists',
    required: true
  },
  name: {
    type: String
  },
  artist: {
    type: String
  },
  album: {
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

module.exports = mongoose.model('company-tracks', CompanyTrackSchema);