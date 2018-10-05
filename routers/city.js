const cityRouter = require('express').Router();
const {getCities, getCityAreas} = require('../controllers/cities');

cityRouter.route('/')
    .get(getCities)

cityRouter.route('/:city_id/areas')
    .get(getCityAreas);

module.exports = cityRouter;