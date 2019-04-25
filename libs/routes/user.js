const express = require('express');

const User = require('../model/user');

const log = require('../logger')(module);

var router = express.Router();

router.post('/', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    user.save()
        .then(() => {
            log.info(user);
            res.status(201).json({
                msg: 'user created!'
            });
        })
        .catch(() => {
            log.error('Could not create user');
            res.status(500).json({
                msg: 'Could not create user'
            });
        }); 
});

router.get('/', (req, res) => {
    if (req.query.username) {
        User.findOne({ username: req.query.username })
            .then(user => {
                res.status(200).json({
                    msg: 'User fetched',
                    user: user
                });
            })
            .catch(() => {
                log.error('Could not fetch user');
                res.status(500).json({
                    msg: 'Could not fetch user'
                });
            });
    } else {
        User.find()
            .then(users => {
                res.status(200).json({
                    msg: 'Users fetched',
                    users: users
                });
            })
            .catch(() => {
                log.error('Could not fetch users');
                res.status(500).json({
                    msg: 'Could not fetch users'
                });
            });
    }
});

module.exports = router;
