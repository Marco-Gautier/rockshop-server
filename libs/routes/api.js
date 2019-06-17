const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'the API is up'
    });
});

module.exports = router;
