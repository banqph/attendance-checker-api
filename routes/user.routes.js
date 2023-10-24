const express = require('express');
const router = express.Router();
const queries = require('../application/user/queries/getUserByIdQuery');

router.get('/users/:id', (req, res) => {
    queries.getById(req, res);
});

module.exports = router;
