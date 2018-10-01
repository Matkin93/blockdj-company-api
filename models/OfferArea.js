const mongoose = require('mongoose');
const { Schema } = mongoose;

const OfferAreaSchema = new Schema({
  offer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'offers',
    required: true
  },
  area_id: {
    //area schema is in the app.js BE. Implement one here in company api?
    ype: mongoose.Schema.Types.ObjectId,
    ref: 'area',
    required: true
  },
})

module.exports = mongoose.model('offers', OfferAreaSchema);