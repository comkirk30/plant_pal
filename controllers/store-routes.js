const router = require('express').Router();
const sequelize = require('../config/connection');
const { Plant, User, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/stores', (req, res) => {
    res.render('yelp');
});

module.exports = router;