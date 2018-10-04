const mongoose = require('mongoose');
const {City, Area, Company, CompanyPlaylist, CompanyTrack, Offer } = require('../models');
const {createRefObj, formatAreaData, formatPlaylistData, formatTrackData, formatOfferData} = require('../utils');

const seedDB = (cities, areas, companies, playlists, tracks, offers) => {
    return mongoose.connection.dropDatabase()
        .then(() => {
            return Promise.all([
                City.insertMany(cities),
                Company.insertMany(companies)
            ]);
        }) 
        .then(([cityDocs, companyDocs]) => {
            const cityRefs = createRefObj(cities, cityDocs, 'name', '_id');
            return Promise.all([
                cityDocs,
                companyDocs,
                Area.insertMany(formatAreaData(areas, cityRefs))
            ]);
        })
        .then(([cityDocs, companyDocs, areaDocs]) => {
            const companyRefs = createRefObj(companies, companyDocs, 'name', '_id');
            return Promise.all([
                cityDocs,
                companyDocs, 
                areaDocs,
                CompanyPlaylist.insertMany(formatPlaylistData(playlists, companyRefs))
            ])
        })
        .then(([cityDocs, companyDocs, areaDocs, playlistDocs]) => {
            const playlistRefs = createRefObj(playlists, playlistDocs, 'name', '_id');
            return Promise.all([
                cityDocs, 
                companyDocs, 
                areaDocs, 
                playlistDocs,
                CompanyTrack.insertMany(formatTrackData(tracks, playlistRefs))
            ])
        })
        .then(([cityDocs, companyDocs, areaDocs, playlistDocs, trackDocs]) => {
            const areaRefs = createRefObj(areas, areaDocs, 'name', '_id');
            const companyRefs = createRefObj(companies, companyDocs, 'name', '_id');
            return Promise.all([
                cityDocs, 
                companyDocs, 
                areaDocs, 
                playlistDocs,
                trackDocs,
                Offer.insertMany(formatOfferData(offers, areaRefs, companyRefs))
            ])
        })
        .catch(console.log);
}

module.exports = seedDB;