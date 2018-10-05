const {City, Area} = require('../models');
 
module.exports.getCities = (req, res, next) => {
   City.find({})
       .then(cities => {
           res.status(200).send({cities});
       })
       .catch(err => next(err));
}

module.exports.getCityAreas = (req, res, next) => {
    Area.find({city: req.params.city_id})
        .then(areas => {
            res.status(200).send({areas});
        })
        .catch(err => next(err));
 }