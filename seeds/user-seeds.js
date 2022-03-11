const { User } = require('../models');

const userData = [
    {
        username: 'Potter_1',
        email: 'harry@hogwarts.com',
        password: 'scarz',
        about: 'Pro seeker for Gryffindor',
        location: 'Cupboard under the stairs'
    },
    {
        username: 'Hermione',
        email: 'hermione@hogwarts.com',
        password: 'hermione',
        about: 'self-proclaimed no-it-all, but no idea what to do with plants',
        location: 'Carmel, IN'
    },
    {
        username: 'Ronny_W',
        email: 'ron@hogwarts.com',
        password: 'weasley',
        about: 'I love the whomping willow',
        location: 'Oxford, UK'
    },
    {
        username: 'tom_riddle',
        email: 'the_real_voldemort@slytherin.com',
        password: 'no_nose',
        about: 'Honestly, i would not care if i never saw another plant again.',
        location: 'Unknown'
    },
    {
        username: 'Snape',
        email: 'severus@hogwarts.com',
        password: 'always',
        about: 'Potion master',
        location: 'Slytherin house'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;