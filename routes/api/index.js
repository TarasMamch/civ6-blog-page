const router = require('express').Router();
const leaderRoutes = require('./leader-routes');
const civRoutes = require("./civ-routes")
const unitRoutes = require("./unit-routes")
const buildingRoutes = require("./building-routes")
const userRoutes = require('./user-routes')
const postRoutes = require('./post-routes')


router.use('/leaders', leaderRoutes);
router.use('/civs', civRoutes);
router.use('/units', unitRoutes);
router.use('/buildings', buildingRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;