const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Plant, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  console.log('======================');
  Plant.findAll({
          attributes: [
              'id',
              'name',
              'sunlight',
              'water',
              'date_water'
          ],
          order: [
              ['created_at', 'DESC']
          ],
          include: [{
                  model: User,
                  attributes: ['username']
              }
          ]
      })
      .then(dbPlantData => res.json(dbPlantData.reverse()))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });

});

router.get('/:id', (req, res) => {
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
      res.json(dbPlantData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new Plant
router.post('/', withAuth, (req, res) => {
  Plant.create({
    name: req.body.name,
    sunlight: req.body.sunlight,
    water: req.body.water,
    date_water: req.body.date_water,
    // plant_img: req.body.plant_img,
    user_id: req.session.user_id
  })
    .then(dbPlantData => res.json(dbPlantData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Edit a plant
router.put('/:id', withAuth, (req, res) => {
  Plant.update(
    {
      name: req.body.name,
      sunlight: req.body.sunlight,
      water: req.body.water,
      date_water: req.body.date_water,
      // plant_img: req.body.plant_img
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPlantData => {
      if (!dbPlantData) {
        res.status(404).json({ message: 'No plant found with this id' });
        return;
      }
      res.json(dbPlantData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a plant
router.delete('/:id', withAuth, (req, res) => {
  Plant.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPlantData => {
      if (!dbPlantData) {
        res.status(404).json({ message: 'No plant found with this id' });
        return;
      }
      res.json(dbPlantData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;