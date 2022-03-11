const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Plant, User, Category } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    console.log('======================');
    Plant.findAll({
            attributes: ['id',
                'name',
                'sunlight',
                'water',
                'date_water',
                'plant_img'
            ],
            order: [
                ['created_at', 'DESC']
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                // {
                //     model: Category,
                //     attributes: ['id', 'name'],
                //     include: {
                //         model: User,
                //         attributes: ['username']
                //     }
                // }
            ]
        })
        .then(dbPostData => res.json(dbPostData.reverse()))
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
        // {
        //   model: Category,
        //   attributes: ['name'],
        // },
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

router.post('/', withAuth, (req, res) => {
  
    Post.create({
      name: req.body.name,
      sunllight: req.body.sunlight,
      water: req.body.water,
      date_water: req.body.date_water,
      plant_img: req.body.plant_img
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// router.get('/:id', (req, res) => {
//     Post.findOne({
//             where: {
//                 id: req.params.id
//             },
//             attributes: ['id',
//                 'content',
//                 'title',
//                 'created_at'
//             ],
//             include: [{
//                     model: User,
//                     attributes: ['username']
//                 },
//                 {
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 }
//             ]
//         })
//         .then(dbPostData => {
//             if (!dbPostData) {
//                 res.status(404).json({ message: 'No post found with this id' });
//                 return;
//             }
//             res.json(dbPostData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// router.post('/', withAuth, (req, res) => {
//         Post.create({
//             title: req.body.title,
//             content: req.body.content,
//             user_id: req.session.user_id
//         })
//           .then(dbPostData => res.json(dbPostData))
//           .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//           });
// });

// router.put('/:id', withAuth, (req, res) => {
//     Post.update({
//             title: req.body.title,
//             content: req.body.content
//         }, {
//             where: {
//                 id: req.params.id
//             }
//         }).then(dbPostData => {
//             if (!dbPostData) {
//                 res.status(404).json({ message: 'No post found with this id' });
//                 return;
//             }
//             res.json(dbPostData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// router.delete('/:id', withAuth, (req, res) => {
//     Post.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(dbPostData => {
//         if (!dbPostData) {
//             res.status(404).json({ message: 'No post found with this id' });
//             return;
//         }
//         res.json(dbPostData);
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

module.exports = router;