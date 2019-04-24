const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'API is up'
    });
});

module.exports = router;
