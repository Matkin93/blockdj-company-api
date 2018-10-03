const companyRouter = require('express').Router();
const {getCompanies, getCompanyById, updateCompanyById} = require('../controllers/companies');
const {getCompanyPlaylists, addCompanyPlaylist, getCompanyPlaylistById, updateCompanyPlaylistById} = require('../controllers/playlists');

companyRouter.route('/')
    .get(getCompanies)

companyRouter.route('/:company_id')
    .get(getCompanyById)
    .put(updateCompanyById);

companyRouter.route('/:company_id/playlists')
    .get(getCompanyPlaylists)
    .post(addCompanyPlaylist);

companyRouter.route('/:company_id/playlists/:playlist_id')
    .get(getCompanyPlaylistById)
    .put(updateCompanyPlaylistById)

module.exports = companyRouter;