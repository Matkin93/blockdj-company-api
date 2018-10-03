const mongoose = require('mongoose');
const { Schema } = mongoose;

const OfferAreaSchema = new Schema({
  offer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'offers',
    required: true
  },
  area_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'areas',
    required: true
  },
})

module.exports = mongoose.model('offer_areas', OfferAreaSchema);