const companyRouter = require('express').Router();

const {getCompanies, getCompanyById, updateCompanyById} = require('../controllers/companies');
const {getCompanyPlaylists, addCompanyPlaylist, getCompanyPlaylistById, updateCompanyPlaylistById, deleteCompanyPlaylistById} = require('../controllers/playlists');
const {getCompanyOffers, getCompanyOfferById, addCompanyOffer, updateCompanyOfferById, deleteCompanyOfferById} = require('../controllers/offers');
const {addPlaylistTrack, getPlaylistTracks, getPlaylistTrackById, updatePlaylistTrackById, deletePlaylistTrackById} = require('../controllers/tracks');

// 1
companyRouter.route('/')
    .get(getCompanies)

// 2, 3
companyRouter.route('/:company_id')
    .get(getCompanyById)
    .put(updateCompanyById);

// 4, 5
companyRouter.route('/:company_id/playlists')
    .get(getCompanyPlaylists)
    .post(addCompanyPlaylist);

// 6, 7
companyRouter.route('/:company_id/playlists/:playlist_id/tracks')
    .get(getPlaylistTracks)
    .post(addPlaylistTrack)

// 8, 9, 10
companyRouter.route('/:company_id/playlists/:playlist_id/tracks/:track_id')
    .get(getPlaylistTrackById)
    .put(updatePlaylistTrackById)
    .delete(deletePlaylistTrackById)

// 11, 12, 13
companyRouter.route('/:company_id/playlists/:playlist_id')
    .get(getCompanyPlaylistById)
    .put(updateCompanyPlaylistById)
    .delete(deleteCompanyPlaylistById)

// 14, 15
companyRouter.route('/:company_id/offers')
    .get(getCompanyOffers)
    .post(addCompanyOffer)

// 16, 17, 18
companyRouter.route('/:company_id/offers/:offer_id')
    .get(getCompanyOfferById)
    .put(updateCompanyOfferById)
    .delete(deleteCompanyOfferById)


module.exports = companyRouter;