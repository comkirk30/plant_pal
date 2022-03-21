const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const plantRoutes = require('./plant-routes.js');
const yelpRoutes = require('./yelp-routes.js')



router.use('/users', userRoutes);
router.use('/plants', plantRoutes);
router.use('/yelp', yelpRoutes)

module.exports = router;