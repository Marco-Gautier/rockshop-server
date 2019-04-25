const mongoose = require('mongoose');

const libs = process.cwd() + '/libs/';
const config = require(libs + 'config');
const log = require(libs + 'logger');

mongoose.connect(config.get('mongoose:uri'))
    .then(() => {
        log.debug('connected to database');
    })
    .catch(() => {
        log.error('failed to connect to database');
    });

module.exports = mongoose;

