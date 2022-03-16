const router = require('express').Router();
const sequelize = require('../config/connection');
const { Plant, User } = require('../models');

// get all plants for homepage
router.get('/', (req, res) => {
  Plant.findAll({
    attributes: [
      'id',
      'name',
      'sunlight',
      'water',
      'date_water',
      // 'plant_img'

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

      res.render('homepage', 
      { plants, loggedIn: req.session.loggedIn }
      );
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// redirecting user to homepage after login
router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/stores', (req, res) => {
  res.render('search-store', { loggedIn: req.session.loggedIn });
});

// get a single plant and render single plant page
router.get('/plants/:id', (req, res) => {
  Plant.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'sunlight',
      'water',
      'date_water',
      // 'plant_img'
    ],
    include: [
      {
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

      res.render('single-plant', { plant, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;