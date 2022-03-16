const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const plantRoutes = require('./plant-routes.js');
const yelpRoutes = require('./yelp-routes.js')
//const commentRoutes = require('./comment-routes');


router.use('/users', userRoutes);
router.use('/plants', plantRoutes);
router.use('/yelp', yelpRoutes)
// router.use('/comments', commentRoutes);

module.exports = router;