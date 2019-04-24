var nconf = require('nconf');

/* TODO: make a real conf and why not a docker environment */

nconf.argv().env();

nconf.file('defaults', {
    file: process.cwd() + '/config.json'
});

module.exports = nconf;