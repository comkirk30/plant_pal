const router = require('express').Router();
const sequelize = require('../config/connection');
const { Plant, User } = require('../models');
const withAuth = require('../utils/auth');

// get all plants by that user
router.get('/', withAuth, (req, res) => {
    Plant.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'name',
                'sunlight',
                'water',
                'date_water'
            ],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPlantData => {
            const plants = dbPlantData.map(plant => plant.get({ plain: true }));
            res.render('dashboard', { plants, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one plant to edit
router.get('/edit/:id', withAuth, (req, res) => {
    Plant.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'name',
                'sunlight',
                'water',
                'date_water'
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPlantData => {
            if (!dbPlantData) {
                res.status(404).json({ message: 'No plant found with this id' });
                return;
            }

            const plant = dbPlantData.get({ plain: true });
            res.render('edit-plant-profile', { plant, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// Create a new plant
router.get('/create', withAuth, (req, res) => {
    res.render('new-plant-profile', { loggedIn: req.session.loggedIn });
});


module.exports = router;