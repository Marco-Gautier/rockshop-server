const mongoose = require('mongoose');

const libs = process.cwd() + '/libs/';
const config = require(libs + 'config');
const log = require(libs + 'logger')(module);

const mongo_uri = config.get('mongodb:uri');
const mongo_config = config.get('mongodb:config');

mongoose.connect(mongo_uri, mongo_config)
    .then(() => {
        log.debug('connected to database');
    })
    .catch(() => {
        log.error('failed to connect to database');
    });

module.exports = mongoose;

