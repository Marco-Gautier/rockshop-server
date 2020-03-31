const express = require("express");

var router = express.Router();

// TODO: add real logic to /product GET method
router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'This is the all posts route'
    });
});

// TODO: add real logic to /product/:id GET method
router.get('/:id', (req, res) => {
    res.status(200).json({
        msg: 'This is the single product route: ' + req.params.id
    });
});

// TODO: add real logic to /product POST method
router.post('/', (req, res) => {
    res.status(201).json({
        msg: 'New Product added',
        product: req.body
    });
});

// TODO: add real logic to /product/id PUT method
router.put('/:id', (req, res) => {
    res.status(200).json({
        msg: 'Product with id: ' + req.params.id + ' was succesfully updated'
    });
});

// TODO: add real logic to /product/id DELETE method
router.delete('/:id', (req, res) => {
    res.status(200).json({
        msg: 'Product with id: ' + req.params.id + ' was succesfully deleted'
    });
});

module.exports = router;
