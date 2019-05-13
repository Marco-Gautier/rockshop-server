var nconf = require('nconf');

/* TODO: make a real conf and why not a docker environment */

nconf.argv().env();

if (process.env.ENV_IN === 'docker') {
    nconf.file('docker', {
        file: process.cwd() + '/docker.config.json'
    });
}

nconf.file('defaults', {
    file: process.cwd() + '/config.json'
});

module.exports = nconf;