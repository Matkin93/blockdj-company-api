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