const {Company, CompanyPlaylist} = require('../models');

module.exports.getCompanyPlaylists = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400})
            return CompanyPlaylist.find({company: req.params.company_id});
        })
        .then(playlists => {
            res.status(200).send({playlists})
        })
        .catch(err => next(err));
}

module.exports.getCompanyPlaylistById = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400})
            return CompanyPlaylist.find({_id: req.params.playlist_id, company: req.params.company_id});
        })
        .then(playlist => {
            if (!playlist) return Promise.reject({msg: 'Playlist not found or no permission', status: 400})
            res.status(200).send({playlist})
        })
        .catch(err => next(err));
}

module.exports.addCompanyPlaylist = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400})
            return CompanyPlaylist.create({...req.body, company: req.params.company_id})
        })
        .then(playlist => {
            res.status(201).send({playlist})
        })
        .catch(err => next(err));
}

module.exports.deleteCompanyPlaylist = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400})
            else return CompanyPlaylist.findOne({_id: req.params.playlist_id, company_id: company._id})
        })
        .then(playlist => {
            return Promise.all([
                playlist,
                CompanyPlaylist.deleteOne({_id: req.params.playlist_id})
            ])
        })
        .then(([playlist, results]) => {
            res.status(201).send({playlist})
        })
        .catch(err => next(err));
}


module.exports.updateCompanyPlaylistById = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400});
            else return CompanyPlaylist.findOne({_id: req.params.playlist_id, company: req.params.company_id});
        })
        .then(playlist => {
            if (!playlist) return Promise.reject({msg: 'Playlist not found or no permission', status: 400})
            else return CompanyPlaylist.findOneAndUpdate({_id:req.params.playlist_id}, {...req.body, company: req.params.company_id}, {new:true});
        })
        .then(playlist => {
            res.status(200).send({playlist})
        })
        .catch(err => next(err));
}