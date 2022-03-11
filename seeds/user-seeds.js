const { User } = require('../models');

const userData = [{
        username: 'thom',
        email: 'thom@gmail.com',
        password: 'thom123',
        about: 'a plant lover',
        location: 'Carmel, IN'
    },
    {
        username: 'josh',
        email: 'josh@gmail.com',
        password: 'josh123',
        about: 'I love Harry Potter themed plants',
        location: 'Oxford, UK'
    },
    {
        username: 'niki',
        email: 'niki@aol.com',
        password: 'niki123',
        about: 'House plant lover',
        location: 'Indianapolis, IN'
    },
    {
        username: 'Potter_1',
        email: 'harry@hogwarts.com',
        password: 'scarz',
        about: 'Pro seeker for Gryffindor',
        location: 'Cupboard under the stairs'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;