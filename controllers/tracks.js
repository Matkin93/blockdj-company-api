const {Company, CompanyPlaylist, CompanyTrack} = require('../models');

module.exports.getPlaylistTracks = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400})
            else return CompanyPlaylist.findOne({_id: req.params.playlist_id, company: company._id})
        })
        .then(playlist => {
            if (!playlist) return Promise.reject({msg: 'Playlist not found or no permission', status: 400})
            else return CompanyTrack.find({playlist: playlist._id})
        })
        .then(tracks => {
            res.status(200).send({tracks})
        })
        .catch(err => next(err));
}

module.exports.getPlaylistTrackById = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400})
            else return CompanyPlaylist.findOne({_id: req.params.playlist_id, company: company._id})
        })
        .then(playlist => {
            if (!playlist) return Promise.reject({msg: 'Playlist not found or no permission', status: 400})
            else return CompanyTrack.findOne({_id: req.params.track_id, playlist: playlist._id})
        })
        .then(track => {
            res.status(200).send({track})
        })
        .catch(err => next(err));
}

module.exports.addPlaylistTrack = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400})
            else return CompanyPlaylist.findOne({_id: req.params.playlist_id, company: company._id})
        })
        .then(playlist => {
            if (!playlist) return Promise.reject({msg: 'Playlist not found or no permission', status: 400})
            else return CompanyTrack.create({...req.body, playlist: playlist._id})
        })
        .then(track => {
            res.status(200).send({track})
        })
        .catch(err => next(err));

}


module.exports.updatePlaylistTrackById = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400})
            else return CompanyPlaylist.findOne({_id: req.params.playlist_id, company: company._id})
        })
        .then(playlist => {
            if (!playlist) return Promise.reject({msg: 'Playlist not found or no permission', status: 400})
            else return Promise.all([
                playlist,
                CompanyTrack.findOne({_id: req.params.track_id, playlist: playlist._id})
            ])
        })
        .then(([playlist, track]) => {
            return CompanyTrack.findOneAndUpdate({_id: track._id}, {...req.body, playlist: playlist._id}, {new:true})
        })
        .then(track => {
            res.status(200).send({track})
        })
        .catch(err => next(err));

}

module.exports.deletePlaylistTrackById = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400})
            else return CompanyPlaylist.findOne({_id: req.params.playlist_id, company: company._id})
        })
        .then(playlist => {
            if (!playlist) return Promise.reject({msg: 'Playlist not found or no permission', status: 400})
            else return CompanyTrack.findOne({_id: req.params.track_id, playlist: playlist._id})
        })
        .then(track => {
            return Promise.all([
                track, 
                CompanyTrack.deleteOne({_id: track._id})
            ])
        })
        .then(([track, result]) => {
            res.status(201).send({track})
        })
        .catch(err => next(err));
}
