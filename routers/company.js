const companyRouter = require('express').Router();
const {getCompanies, getCompanyById, updateCompanyById} = require('../controllers/companies');
const {getCompanyPlaylists, addCompanyPlaylist} = require('../controllers/playlists');

companyRouter.route('/')
    .get(getCompanies)

companyRouter.route('/:company_id')
    .get(getCompanyById)
    .put(updateCompanyById);

companyRouter.route('/:company_id/playlists')
    .get(getCompanyPlaylists)
    .post(addCompanyPlaylist);

module.exports = companyRouter;