const mongoose = require('mongoose');

Post = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        default: "assets/images/default"
    },
    body: {
        type: String,
        required: true
    },
    creation_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', Post);