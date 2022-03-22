const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

router.get('/stores', withAuth, (req, res) => {
    res.render('search-store', { loggedIn: req.session.loggedIn });
});

module.exports = router;