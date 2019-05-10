const express = require('express');
const bodyParser = require('body-parser');

const log = require('./logger')(module);

// actually it's not useless, it connect to the database
const mongoose = require('./db/mongoose');

const api = require('./routes/api');
const user = require('./routes/user');
const post = require('./routes/post');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', api);
app.use('/api', api);
app.use('/api/user', user);
app.use('/api/post', post);

app.use((req, res, next) => {
    res.status(404);
    log.debug('%s %d %s', req.method, res.statusCode, req.url);
    res.json({
        error: 'Not found'
    });
    return;
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    log.error('%s %d %s', req.method, res.statusCode, err.message);
    res.json({
        error: err.message
    });
    return;
});

module.exports = app;