const apiRouter = require('express').Router();

apiRouter.route('/')
    .get((req, res, next) => {
        res.status(200).send('testing')
    });

module.exports = apiRouter;