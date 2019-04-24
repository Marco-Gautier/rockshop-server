var winston = require('winston');

/* TODO: config the logger: pretty message + colors on output but json in logs */

function logger(module) {
    return new winston.createLogger({
        format: winston.format.combine(
            winston.format.splat(),
            winston.format.simple()
        ),
        transports: [
            new winston.transports.File({
                level: 'info',
                filename: process.cwd() + '/logs/all.log',
                handleException: true,
                json: true,
                maxSize: 5242880, //5mb
                maxFiles: 2,
                colorize: false
            }),
            new winston.transports.Console({
                level: 'debug',
                label: getFilePath(module),
                handleException: true,
                json: false,
                colorize: true
            })
        ],
        exitOnError: false
    });
}

function getFilePath(module) {
    // Add filename in log statements
    return module.filename.split('/').slice(-2).join('/');
}

module.exports = logger;