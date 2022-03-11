const router = require('express').Router();
const sequelize = require('../config/connection');
const { Plant, User, Category } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  Plant.findAll({
    attributes: [
      'id',
      'name',
      'sunlight',
      'water',
      'date_water',

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

// signup page
// router.get('/signup', (req, res) => {
//   res.render('signup');
// });

// get single post
// router.get('/post/:id', (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'post_text',
//       'title',
//       'created_at'
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }

//       const post = dbPostData.get({ plain: true });

//       res.render('single-post', { post, loggedIn: req.session.loggedIn });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;