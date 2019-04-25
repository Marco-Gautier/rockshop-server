const mongoose = require('mongoose');
const crypto = require('crypto');

User = new mongoose.Schema({
    username: { // user's username
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: { // user's password
        type: String,
        required: true
    },
    salt: { // used to generate hash
        type: String,
        required: true
    },
    created: { // user's creation date
        type: Date,
        default: Date.now
    }
});

User.methods.encryptPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 42000, 512, 'sha512').toString('hex');
};

User.virtual('userId').get(function() {
    return this.id;
});

User.virtual('password').set(function(password) {
    this.salt = crypto.randomBytes(128).toString('hex');
    this.hashedPassword = this.encryptPassword(password);
});

User.methods.isPasswordCorrect = function(password) {
    return this.encryptPassword(password) === this.hashedPassword;
};

module.exports = mongoose.model('User', User);