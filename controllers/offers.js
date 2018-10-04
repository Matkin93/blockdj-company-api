const {Offer, Company, Area} = require('../models');

module.exports.getCompanyOffers = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400});
            else return Offer.find({company_id: req.params.company_id});
        })
        .then(offers => {
            return Area.populate(offers, 'areas');
        })
        .then(offers => {
            res.status(200).send({offers});
        })
        .catch(err => next(err));
}

module.exports.getCompanyOfferById = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400});
            else return Offer.find({_id: req.params.offer_id, company_id: req.params.company_id});
        })
        .then(offer => {
            res.status(200).send({offer});
        })
        .catch(err => next(err));
}

module.exports.addCompanyOffer = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400});
            else return Offer.create({...req.body, company_id: req.params.company_id})
        })
        .then(offer => {
            res.status(201).send({offer});
        })
        .catch(err => next(err));
}

module.exports.updateCompanyOfferById = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400});
            else return Offer.findOne({_id: req.params.offer_id, company_id: company._id})
        })
        .then(offer => {
            if (!offer) return Promise.reject({msg: 'Offer not found or no permission', status: 400});
            else return Offer.findOneAndUpdate({_id: req.params.offer_id, company_id: req.params.company_id}, {...req.body, company_id: req.params.company_id}, {new:true})
        })
        .then(offer => {
            res.status(201).send({offer});
        })
        .catch(err => next(err));
}

module.exports.deleteCompanyOfferById = (req, res, next) => {
    Company.findOne({_id: req.params.company_id, user_id: req.user.sub})
        .then(company => {
            if (!company) return Promise.reject({msg: 'Company not found or no permission', status: 400});
            else return Offer.findOne({_id: req.params.offer_id, company_id: company._id})
        })
        .then(offer => {
            return Promise.all([
                offer,
                Offer.deleteOne({_id: offer._id})
            ])
        })
        .then(([offer, result]) => {
            res.status(202).send({offer})
        })
        .catch(err => next(err));

}