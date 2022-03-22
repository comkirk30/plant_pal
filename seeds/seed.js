const seedUsers = require('./user-seeds');
const seedPlants = require('./plant-seeds');
const seedCategories = require('./category-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPlants();
    await seedCategories();
    process.exit(0);
};

seedAll();