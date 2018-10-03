const {Offer, Company} = require('../models');

module.exports.getCompanyOffers = (req, res, next) => {
    Company.find({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400});
            else return Offer.find({company_id: req.params.company_id});
        })
        .then(offers => {
            res.status(200).send({offers});
        })
        .catch(err => next(err));
}

module.exports.addCompanyOffer = (req, res, next) => {
    Company.find({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400});
            else return Offer.create({...req.body, company_id: req.params.company_id})
        })
        .then(offer => {
            res.status(201).send({offer});
        })
        .catch(err => next(err));
}