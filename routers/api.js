const apiRouter = require('express').Router();
const companyRouter = require('./company');
const cityRouter = require('./city');

apiRouter.route('/')
    .get((req, res, next) => {
        res.status(200).send('testing')
    });

apiRouter.use('/companies', companyRouter);
apiRouter.use('/cities', cityRouter);

module.exports = apiRouter;