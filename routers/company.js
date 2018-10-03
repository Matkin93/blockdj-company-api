const companyRouter = require('express').Router();
const {getCompanies, getCompanyById, updateCompanyById} = require('../controllers/companies');
const {getCompanyPlaylists, addCompanyPlaylist, getCompanyPlaylistById, updateCompanyPlaylistById} = require('../controllers/playlists');
const {getCompanyOffers, getCompanyOfferById, addCompanyOffer, updateCompanyOfferById, deleteCompanyOfferById} = require('../controllers/offers');

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

companyRouter.route('/:company_id/offers')
    .get(getCompanyOffers)
    .post(addCompanyOffer)

companyRouter.route('/:company_id/offers/:offer_id')
    .get(getCompanyOfferById)
    .put(updateCompanyOfferById)
    .delete(deleteCompanyOfferById)

module.exports = companyRouter;