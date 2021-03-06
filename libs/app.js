const express = require('express');
const bodyParser = require('body-parser');

const log = require('./logger')(module);

// actually it's not useless, it connect to the database
const mongoose = require('./db/mongoose');

const api = require('./routes/api');
const user = require('./routes/user');
const post = require('./routes/post');
const product = require('./routes/Shop/product');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use((req, res, next) => {
    log.info('%s %s %s', req.method, res.statusCode, req.url);
    next();
});

app.use('/', api);
app.use('/api', api);
app.use('/api/user', user);
app.use('/api/post', post);
app.use('/api/products', product);

app.use((req, res, next) => {
    res.status(404);
    res.json({
        error: 'Not found'
    });
    return;
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: err.message
    });
    return;
});

module.exports = app;
