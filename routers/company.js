const companyRouter = require('express').Router();

const {getCompanies, getCompanyById, updateCompanyById} = require('../controllers/companies');
const {getCompanyPlaylists, addCompanyPlaylist, getCompanyPlaylistById, updateCompanyPlaylistById, deleteCompanyPlaylistById} = require('../controllers/playlists');
const {getCompanyOffers, getCompanyOfferById, addCompanyOffer, updateCompanyOfferById, deleteCompanyOfferById} = require('../controllers/offers');
const {addPlaylistTrack, getPlaylistTracks, getPlaylistTrackById, updatePlaylistTrackById, deletePlaylistTrackById} = require('../controllers/tracks');

companyRouter.route('/')
    .get(getCompanies)

companyRouter.route('/:company_id')
    .get(getCompanyById)
    .put(updateCompanyById);

companyRouter.route('/:company_id/playlists')
    .get(getCompanyPlaylists)
    .post(addCompanyPlaylist);

companyRouter.route('/:company_id/playlists/:playlist_id/tracks')
    .get(getPlaylistTracks)
    .post(addPlaylistTrack)

companyRouter.route('/:company_id/playlists/:playlist_id/tracks/:track_id')
    .get(getPlaylistTrackById)
    .put(updatePlaylistTrackById)
    .delete(deletePlaylistTrackById)

companyRouter.route('/:company_id/playlists/:playlist_id')
    .get(getCompanyPlaylistById)
    .put(updateCompanyPlaylistById)
    .delete(deleteCompanyPlaylistById)

companyRouter.route('/:company_id/offers')
    .get(getCompanyOffers)
    .post(addCompanyOffer)

companyRouter.route('/:company_id/offers/:offer_id')
    .get(getCompanyOfferById)
    .put(updateCompanyOfferById)
    .delete(deleteCompanyOfferById)


module.exports = companyRouter;