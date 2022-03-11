const seedUsers = require('./user-seeds');
const seedPlants = require('./plant-seeds');
//const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPlants();
  //  await seedComments();
    process.exit(0);
};

seedAll();