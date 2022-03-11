const { Category } = require('../models');

const categoryData = [
    {
        name: 'Snake Plant',
    },
    {
        name: 'Flower',
    },
    {
        name: 'Cactus',
    },
    {
        name: 'Fern',
    },
    {
        name: 'Succulent',
    },
    {
        name: 'Bonsai',
    },
    {
        name: 'Lily',
    },
    {
        name: 'Rose',
    },
    {
        name: 'Bamboo',
    },
    {
        name: 'Palm',
    },

];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;