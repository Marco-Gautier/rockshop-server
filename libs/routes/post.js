const express = require('express');

const lib = process.cwd() + '/libs/';

const Post = require(lib + 'model/Post');
const log = require(lib + 'logger')(module);

var router = express.Router();

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        image_url: req.body.image_url
    })
    post.save()
        .then(() => {
            log.info(post);
            res.status(201).json({
                msg: 'post created!'
            })
        })
        .catch(() => {
            log.error('Could not create post');
            res.status(500).json({
                msg: 'Could not create post!'
            })
        });
});

router.get('/', (req, res) => {
    Post.find()
        .then(posts => {
            res.status(200).json({
                msg: 'Posts fetched',
                posts: posts
            });
        })
        .catch(() => {
            log.error('Could not fetch posts');
            res.status(500).json({
                msg: 'Could not fetch posts'
            });
        });
});

module.exports = router;