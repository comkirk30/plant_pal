const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const plantRoutes = require('./plant-routes');
//const commentRoutes = require('./comment-routes');


router.use('/users', userRoutes);
router.use('/plants', plantRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;