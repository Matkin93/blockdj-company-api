const apiRouter = require('express').Router();
const companyRouter = require('./company');

apiRouter.route('/')
    .get((req, res, next) => {
        res.status(200).send('testing')
    });

apiRouter.use('/companies', companyRouter);

module.exports = apiRouter;