const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./routers/api');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const {DB_URL = require('./config').DB_URL} = process.env;

const app = express();

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://blockdj.eu.auth0.com/.well-known/jwks.json"
    }),
    audience: "http://blockdj-company-api.example.com",
    issuer: "https://blockdj.eu.auth0.com/",
    algorithms: ['RS256']
});

app.use(jwtCheck)

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

mongoose.connect(DB_URL, {useNewUrlParser: true})
    .then(() => {
        console.log(`Connected to Mongo via ${DB_URL}...`);
    });

app.use('/api', apiRouter);

app.use('/*', (req, res, next) => {
    next({msg: 'Page not found', status: 404});
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({msg:'Internal server error', status: 500});
});

// app.use(({msg, status}, req, res, next) => {
//     if (status) res.status(status).send({status, msg});
//     else res.status(500).send({msg:'Internal server error', status: 500});
// });

module.exports = app;