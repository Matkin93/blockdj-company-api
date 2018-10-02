const {Company} = require('../models');
 
module.exports.getCompanies = (req, res, next) => {
    Company.find({_user_id: req.user.sub})
        .then(companies => {
            res.status(200).send({companies})
        })
        .catch(err => next(err));
}

module.exports.updateCompanyById = (req, res, next) => {
    Company.findOneAndUpdate({_id: req.params.company_id, user_id: req.user.sub}, {...req.body, user_id: req.user.sub}, {new:true})
        .then(company => {
            res.status(200).send({company});
        })
        .catch(err => next(err));
}