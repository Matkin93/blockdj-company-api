const companyRouter = require('express').Router();
const {getCompanies, updateCompanyById} = require('../controllers/companies');

companyRouter.route('/')
    .get(getCompanies)

companyRouter.route('/:company_id')
    .put(updateCompanyById)

module.exports = companyRouter;